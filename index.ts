import type { ExecSyncOptions } from 'child_process'
import { execSync } from 'child_process'
import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs'
import { mkdirp } from 'mkdirp'
import { basename, dirname, relative, resolve } from 'path'
import type Read from 'read'
import readCB from 'read'
const origCwd = process.cwd()

import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const templateDir = resolve(__dirname, 'templates')

const writeFile = (path: string, data: string | Buffer) => {
  mkdirp.sync(dirname(path))
  console.error(`writing ${path}`)
  writeFileSync(path, data)
  if (!/^.git[\\\/]/.test(path)) {
    sh(`git add ${path}`)
  }
}

const copy = (
  from: string,
  to: string,
  tx: (data: string) => string = data => data
) => {
  writeFile(to, tx(readFileSync(from, 'utf8')))
}

// poor version of handlebars, but hey, it works and is 1 line
const template = (path: string, data: { [k: string]: string } = {}) => {
  copy(resolve(templateDir, path), path, s => {
    for (const [key, val] of Object.entries(data)) {
      s = s.split(`{{${key.toUpperCase()}}}`).join(val)
    }
    return s
  })
}

const read = (prompt: string, def?: string, opts?: Read.Options) =>
  new Promise<string>((res, rej) =>
    readCB(
      {
        prompt,
        default: def,
        /* c8 ignore start */
        ...(opts || {}),
      },
      (er, d) => (er ? rej(er) : res(d))
      /* c8 ignore stop */
    )
  )

let aliveNodeVersions: string[] | undefined = undefined
const getNodeVersions = async () => {
  const { default: fetch } = await import('node-fetch')
  if (aliveNodeVersions) {
    return aliveNodeVersions
  }
  const versions = (await (
    await fetch(
      'https://raw.githubusercontent.com/nodejs/Release/main/schedule.json'
    )
  ).json()) as { [k: string]: { start: string; end?: string } }
  const now = new Date()
  return (aliveNodeVersions = Object.keys(versions)
    .filter((v: string) => {
      const end = versions[v].end
      return !end || new Date(end) > now
    })
    .sort((a: string, b: string) =>
      versions[a].start.localeCompare(versions[b].start, 'en')
    ))
}

// find the oldest version that isn't yet discontinued, and >= that
const getEngines = async () => {
  const node = (await getNodeVersions())[0].replace(/^v/, '>=')
  return { node }
}

const getFunding = async () => {
  return {
    url: `https://github.com/sponsors/${(await getGitUser()).github}`,
  }
}

const devDeps = [
  '@types/node',
  '@types/tap',
  'c8',
  'eslint-config-prettier',
  'prettier',
  'tap',
  'ts-node',
  'typedoc',
  'typescript',
]

// call a function and use the default if it fails
const tc = <T>(fn: () => T, def: T): T => {
  try {
    return fn()
  } catch (_) {
    return def
  }
}

const writeFixupScript = async () => {
  const bin = await getBin()
  const fixupBin = bin
    ? `
chmod 0755 ${bin}
`
    : ''
  template('scripts/fixup.sh', { fixupBin })
}

const gitConfig = (k: string, v?: string) =>
  v !== undefined ? setGitConfig(k, v) : getGitConfig(k)
const setGitConfig = (k: string, v: string) =>
  sh(
    `git config --global --replace-all ${JSON.stringify(
      k
    )} ${JSON.stringify(v)}`
  )
const getGitConfig = (k: string): string =>
  sh(`git config --get-all ${k}`).trim().split(/\n/)[0].trim()

const sh = (cmd: string, opt?: ExecSyncOptions): string =>
  (execSync(cmd, opt) || '').toString().trim()

interface GitUserData {
  email: string
  name: string
  website: string
  github: string
}
let gitUser: GitUserData | undefined = undefined

const getGitUser = async () => {
  if (gitUser) {
    return gitUser
  }
  const fromGit = {
    email: gitConfig('user.email'),
    name: gitConfig('user.fullname'),
    website: gitConfig('user.website'),
    github: gitConfig('github.user'),
  }

  gitUser = {
    email: fromGit.email || (await read('What is your name? ')),
    name: fromGit.name || (await read('What is your email address? ')),
    website: fromGit.website || (await read('What is your website? ')),
    github:
      fromGit.github || (await read('what is your GitHub username? ')),
  }
  if (gitUser.email && !fromGit.email) {
    gitConfig('user.email', gitUser.email)
  }
  if (gitUser.name && !fromGit.name) {
    gitConfig('user.name', gitUser.name)
  }
  if (gitUser.website && !fromGit.website) {
    gitConfig('user.website', gitUser.website)
  }
  if (gitUser.github && !fromGit.github) {
    gitConfig('github.user', gitUser.github)
  }
  console.error('gitUser', gitUser)
  //gitConfig('user.email', gitUser.email)
  //gitConfig('user.fullname', gitUser.name)
  //gitConfig('user.website', gitUser.website)
  //gitConfig('github.user', gitUser.github)
  return gitUser
}

const getAuthor = async () => {
  const gitUser = await getGitUser()
  return `${gitUser.name} <${gitUser.email}> (${gitUser.website})`
}

const writeLicense = async () => template('LICENSE.md')

const getRepo = async () => {
  let u = sh(`git remote -v | grep origin | awk '{print $2}' | head -n1`)
  if (u) {
    if (u && u.match(/^git@github.com:/)) {
      u = u.replace(/^git@github.com:/, 'git+https://github.com/')
    }
    return { type: 'git', url: u }
  }
}

const writeGitIgnore = async () => {
  writeFile(
    '.gitignore',
    `# ignore most things, include a handful of others
/*
/.*
!/src
!/docs
!/package.json
!/package-lock.json
!/README.md
!/CONTRIBUTING.md
!/LICENSE{,.*}
!/CHANGELOG.md
!/example
!/scripts
!/tap-snapshots
!/test
!/.gitignore
!/.github
!/.prettierignore
!/.gitattributes
!/tsconfig*.json
`
  )
}

const writeIndex = async () => {
  if (!tc(() => readFileSync('src/index.ts', 'utf8'), '')) {
    writeFile('src/index.ts', '// module code goes here\n')
  }
  const varName = basename(await getName())
    .replace(/[^a-z0-9]+([a-z0-9])/gi, (_, $1) => $1.toUpperCase())
    .replace(/^[0-9]+/, '_')
  if (await getDefaultExport()) {
    writeFile(
      'src/index-cjs.ts',
      `// This makes the default import work properly in CommonJS
import ${varName} from './index.js'

export = Object.assign(${varName}, { default: ${varName}, ${varName} })
`
    )
  }
}

const writeBin = async () => {
  if (hasBin && !tc(() => readFileSync('src/index.ts', 'utf8'), '')) {
    writeFile('src/bin.ts', '#!/usr/bin/env node\n// bin code goes here\n')
  }
}

const writeTest = async () => {
  if (!tc(() => readFileSync('test/index.ts', 'utf8'), '')) {
    writeFile(
      'test/index.ts',
      `import t from 'tap'

t.pass('put tests in here', { todo: true })
`
    )
  }
}

let hasDefaultExport: boolean | undefined = undefined
const getDefaultExport = async () => {
  if (hasDefaultExport !== undefined) {
    return hasDefaultExport
  }
  const def = await read('set default export? ', 'yes')
  hasDefaultExport = def.charAt(0).toLowerCase() === 'y'
  return hasDefaultExport
}

let hasBin: boolean | undefined = undefined
const getBin = async () => {
  if (hasBin === undefined) {
    const cur = !!getExistingPkg({ bin: undefined }).bin
    const bin = await read('bin script? ', cur ? 'yes' : 'no')
    hasBin = !!bin && bin.charAt(0).toLowerCase() === 'y'
  }
  return hasBin ? 'dist/cjs/bin.js' : undefined
}

let readme: string | undefined = undefined
const getReadme = () =>
  readme || tc(() => readFileSync('README.md', 'utf8'), '')
const getRmSplit = () => getReadme().trim().split(/\n\n+/)

let name: string | undefined = undefined
const getName = async () => {
  if (name) {
    return name
  }
  const pname = getExistingPkg({ name: '' }).name
  if (pname) {
    return (name = pname)
  }
  const rms = getRmSplit()[0]
  const rname = rms[0].replace(/^\s*#+/, '').trim()
  return (name = rname || basename(process.cwd()))
}

const getDesc = async () => {
  const pdesc = getExistingPkg({ description: '' }).description
  if (pdesc) {
    return pdesc
  }
  const fromGit = tc(
    () => readFileSync('.git/description', 'utf8').trim(),
    ''
  )
  const desc = (
    (readme ? (getRmSplit()[1] || '').replace(/\n/g, ' ').trim() : '') ||
    (fromGit && !/^Unnamed repository/.test(fromGit) ? fromGit : '') ||
    (await read(`description: `))
  ).trim()

  if (desc && desc !== fromGit) {
    tc(() => writeFile('.git/description', desc + '\n'), null)
  }

  return desc
}

let existingPkg: { [k: string]: any } | undefined | null = undefined
const getExistingPkg = (def: { [k: string]: any }) => {
  if (existingPkg === null) {
    return def
  }
  const p = tc(() => JSON.parse(readFileSync('package.json', 'utf8')), def)
  if (p !== def) {
    existingPkg = p
  } else {
    existingPkg = null
  }
  return p
}

const getVersion = () => getExistingPkg({ version: '0.0.0-0' }).version

const getPkg = async () => ({
  name: await getName(),
  version: getVersion(),
  description: await getDesc(),
  author: await getAuthor(),

  // add a bin pointing to ./dist/cjs/bin.js if we have one of those.
  // add 'src' if the build ends up including package.json.
  bin: await getBin(),
  main: (await getDefaultExport())
    ? './dist/cjs/index-cjs.js'
    : './dist/cjs/index.js',
  module: './dist/mjs/index.js',
  exports: {
    '.': {
      // default has to come last, for webkit
      import: {
        types: './dist/mjs/index.d.ts',
        default: './dist/mjs/index.js',
      },
      require: (await getDefaultExport())
        ? {
            types: './dist/cjs/index-cjs.d.ts',
            default: './dist/cjs/index-cjs.js',
          }
        : {
            types: './dist/cjs/index.d.ts',
            default: './dist/cjs/index.js',
          },
    },
  },
  files: ['dist'],
  license: 'BlueOak-1.0.0',
  scripts: {
    preversion: 'npm test',
    postversion: 'npm publish',
    prepublishOnly: 'git push origin --follow-tags',
    preprepare: 'rm -rf dist',
    prepare: 'tsc -p tsconfig.json && tsc -p tsconfig-esm.json',
    postprepare: 'bash ./scripts/fixup.sh',
    pretest: 'npm run prepare',
    presnap: 'npm run prepare',
    test: 'c8 tap',
    snap: 'c8 tap',
    format: 'prettier --write . --loglevel warn',
    typedoc: 'typedoc --tsconfig tsconfig-esm.json ./src/*.ts',
  },
  prettier: {
    semi: false,
    printWidth: 75,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    jsxSingleQuote: false,
    bracketSameLine: true,
    arrowParens: 'avoid',
    endOfLine: 'lf',
  },
  tap: {
    coverage: false,
    'node-arg': ['--no-warnings', '--loader', 'ts-node/esm'],
    ts: false,
  },
  dependencies: getExistingPkg({ dependencies: undefined }).dependencies,
  devDependencies: {},
  engines: await getEngines(),
  funding: await getFunding(),
  repository: await getRepo(),
})

const writeReadme = async () => {
  if (!tc(() => readFileSync('README.md', 'utf8'), '')) {
    writeFile(
      'README.md',
      `# ${await getName()}

${await getDesc()}
`
    )
  }
}

const writePkg = async () => {
  const pkg = await getPkg()
  writeFile('package.json', JSON.stringify(pkg, null, 2) + '\n')
  sh(`npm install -D ${devDeps.map(d => `${d}@latest`).join(' ')}`, {
    stdio: 'inherit',
  })
}

const writeTSConfig = async () => {
  for (const ts of [
    'tsconfig.json',
    'tsconfig-esm.json',
    'tsconfig-base.json',
  ]) {
    template(ts)
  }
}

const writeDotGitHub = async () => {
  const gitHubUser = (await getGitUser()).github

  template('.github/FUNDING.yml', { gitHubUser })

  const n = await getNodeVersions()
  const node_versions = n.map(v => `${v}.x`).join(', ')

  const workflows = readdirSync(resolve(templateDir, '.github/workflows'))
  for (const wf of workflows) {
    const wfp = '.github/workflows/' + wf
    template(wfp, { node_versions })
  }
}
const writePrettierIgnore = async () => template('.prettierignore')

const gitAddPkg = async () => sh('git add package*.json')

const writeAll = async () => {
  await writeReadme()
  await writeLicense()
  await writeBin()
  await writeFixupScript()
  await writeIndex()
  await writeTest()
  await writeGitIgnore()
  await writePrettierIgnore()
  await writeTSConfig()
  await writeDotGitHub()
  await writePkg()
  await gitAddPkg()
}

const makeProjectDir = async () => {
  if (!tc(() => statSync('.git') && true, false)) {
    name = await read('module name? ', undefined)
    if (!name) {
      console.error('aborted')
      process.exit(1)
    }
    const f = name.replace(/^@/, '')
    mkdirp.sync(f)
    process.chdir(f)
    const ok = await read(`ok to initialize in ${f}? `, 'yes')
    if (ok.charAt(0).toLowerCase() !== 'y') {
      console.error('aborted')
      process.exit(1)
    }
    console.error(`initializing in ${f}`)
    sh('git init', { stdio: 'inherit' })
    const gitHubUser = (await getGitUser()).github
    sh(`git remote add origin git@github.com:${gitHubUser}/${basename(f)}`)
    return true
  }
  return false
}

const main = async () => {
  const made = await makeProjectDir()
  await writeAll()
  console.log('done!\n')
  if (made) {
    console.log(`  cd ${relative(origCwd, process.cwd())}\n`)
  }
  console.log('Files added to git, but not yet committed.')
}

main()

#!/usr/bin/env node

const main = async (readOpts) => {

const tc = (fn, def) => { try { return fn() } catch (e) { return def || '' } }
const fs = require('fs')
const path = require('path')
const cwd = process.cwd()

const pkg = tc(() => JSON.parse(fs.readFileSync('package.json')), {})

const readCB = require('read')
const read = (prompt, def) => new Promise((res, rej) =>
  readCB({
    prompt,
    default: def,
    ...(readOpts || /* istanbul ignore next */ {}),
  }, (er, d) => /* istanbul ignore next */ er ? rej(er) : res(d)))

const gitConfig = (k, v) => v ? setGitConfig(k, v) : getGitConfig(k)

const setGitConfig = (k, v) =>
  sh(`git config --global --add ${JSON.stringify(k)} ${JSON.stringify(v)}`)

const getGitConfig = k => sh(`git config --get-all ${k}`)

const {execSync} = require('child_process')

const sh = (cmd, opt) => (execSync(cmd, opt) || '').toString().trim()

const gitFullname = gitConfig('user.fullname')
const myName = gitFullname || await read('What is your full name? ')
if (!gitFullname)
  gitConfig('user.fullname', myName)

const gitEmail = gitConfig('user.email')
const email = gitEmail || await read('What is your email address? ')
if (!gitEmail)
  gitConfig('user.email', email)

const githubUser = gitConfig('github.user')

const gitWebsite = gitConfig('user.website')
const website = gitWebsite || await read('What is your website? ')
if (!gitWebsite)
  gitConfig('user.website', website)

const author = pkg.author || `${myName} <${email}> (${website})`

fs.writeFileSync('LICENSE', `The ISC License

Copyright (c) ${myName} and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`)


const getRepo = () => {
  const gconf = fs.readFileSync('.git/config', 'utf8').split(/\r?\n/)
  const i = gconf.indexOf('[remote "origin"]')
  if (i !== -1) {
    let u = gconf[i + 1]
    if (!u.match(/^\s*url =/)) u = gconf[i + 2]
    if (u.match(/^\s*url =/)) {
      u = u.replace(/^\s*url = /, '')
      if (u && u.match(/^git@github.com:/))
        u = u.replace(/^git@github.com:/, 'https://github.com/')
      return u
    }
  }

  return null
}

if (!tc(() => fs.statSync('.git').isDirectory()))
  sh('git init')

if (!tc(() => fs.readFileSync('.gitignore')))
  fs.writeFileSync('.gitignore', `# ignore most things, include some others
/*
/.*

!bin/
!lib/
!docs/
!package.json
!package-lock.json
!README.md
!CONTRIBUTING.md
!LICENSE
!CHANGELOG.md
!example/
!scripts/
!tap-snapshots/
!test/
!.github/
!.travis.yml
!.gitignore
!.gitattributes
!coverage-map.js
!map.js
!index.js
`)

const readme = tc(() => fs.readFileSync('README.md', 'utf8'), '')
const rmsplit = readme.split(/\n\n+/)
const name = pkg.name ? pkg.name
  : readme ? rmsplit[0].replace(/^\s*#+/, '').trim()
  : path.basename(cwd)

const gitRepo = tc(getRepo, '')
const repository = gitRepo ||
  await read('git repo url: ', githubUser
    ? `https://github.com/${githubUser}/${name}` : '')

const description = (pkg.description ? pkg.description
  : readme ? (rmsplit[1] || '').replace(/\n/g, ' ').trim()
  : '') || await read(`description of ${name}: `)

if (!readme)
  fs.writeFileSync('README.md', `# ${name}

${description}
`)

if (description)
  fs.writeFileSync('.git/description', description + '\n')

if (!tc(() => fs.readFileSync('index.js')))
  fs.writeFileSync('index.js', '// put javascript in here')

fs.writeFileSync('package.json', JSON.stringify({
  name,
  version: '0.0.0',
  ...pkg,
  description,
  author,
  license: 'ISC',
  scripts: {
    ...(pkg.scripts || {}),
    test: 'tap',
    snap: 'tap',
    preversion: 'npm test',
    postversion: 'npm publish',
    postpublish: 'git push origin --follow-tags',
  },
  tap: {
    ...(pkg.tap || {}),
    'check-coverage': true,
  }
}, null, 2))

sh('npm install tap@latest -D', { stdio: 'inherit' })

console.log('done!')

}

/* istanbul ignore next */
if (require.main === module)
  main()
else
  module.exports = main

const t = require('tap')
const fs = require('fs')
const cwd = process.cwd()
const mkdirp = require('mkdirp').sync
const rimraf = require('rimraf').sync


const gitConfig = {}

const execSync = (cmd, opt) => {
  if (cmd === 'git init') {
    fs.mkdirSync('.git')
    return ''
  } else if (cmd.startsWith('git config --get-all'))
    return gitConfig[cmd.replace(/^git config --get-all /, '') || '']
  else if (cmd.startsWith('git config --global --add')) {
    const [k, v] = cmd.replace(/^git config --global --add /, '').split(' ')
      .map(s => JSON.parse(s))
    gitConfig[k] = v
    return ''
  } else if (cmd === 'npm install tap@latest -D')
    return null
  else
    throw new Error('unknown command: ' + cmd)
}
require('child_process').execSync = execSync

const {PassThrough} = require('stream')
const input = new PassThrough()
const output = new PassThrough({ encoding: 'utf8' })

const logs = []
console.log = msg => logs.push(msg)

const create = require('../')

t.beforeEach((cb, t) => {
  t.context.dir = `tmp-test-${t.name}`
  rimraf(t.context.dir)
  mkdirp(t.context.dir)
  process.chdir(t.context.dir)
  cb()
})

t.afterEach((cb, t) => {
  process.chdir(cwd)
  input.read()
  rimraf(t.context.dir)
  cb()
})

t.test('basic', async t => {
  input.write('full-name\n')
  input.write('email@address.com\n')
  input.write('https://my-website.com\n')
  input.write('https://github.com/basic/bar\n')
  input.write('description\n')
  await create({ input, output })
  t.same(logs, ['done!'])
  logs.length = 0
  t.matchSnapshot(output.read(), 'output')
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  t.matchSnapshot(pkg, 'package.json')
  t.matchSnapshot(fs.readFileSync('.git/description', 'utf8'), '.git/description')
  t.matchSnapshot(fs.readFileSync('README.md', 'utf8'), 'readme')
  t.matchSnapshot(fs.readFileSync('LICENSE', 'utf8'), 'license')
  t.matchSnapshot(gitConfig, 'git config')
})


const originConfsWithUrl = [
  '  url = git@github.com:oc-0/bar\n' +
  '  fetch = +refs/heads/*:refs/remotes/origin/*',
  '  fetch = +refs/heads/*:refs/remotes/origin/*\n' +
  '  url = git@github.com:oc-1/bar',
  '  url = git://some-other-place/blerg.git\n' +
  '  fetch = +refs/heads/*:refs/remotes/origin/*\n',
]

originConfsWithUrl.forEach((oc, i) => {
  t.test('saved-configs-and-readme-' + i, async t => {

    fs.writeFileSync('README.md', `# foo

description
  `)
    fs.mkdirSync('.git')
    fs.writeFileSync('.git/config', `
[core]
  repositoryformatversion = 0
  filemode = true
  bare = false
  logallrefupdates = true
  ignorecase = true
  precomposeunicode = true
[remote "origin"]
${oc}
`)
    input.write('https://github.com/saved-configs-and-readme-' + i + '/bar\n')
    input.write('\n')
    await create({ input, output })
    t.same(logs, ['done!'])
    logs.length = 0
    t.matchSnapshot(output.read(), 'output')
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    t.matchSnapshot(pkg, 'package.json')
    t.matchSnapshot(fs.readFileSync('.git/description', 'utf8'), '.git/description')
    t.matchSnapshot(fs.readFileSync('README.md', 'utf8'), 'readme')
    t.matchSnapshot(fs.readFileSync('LICENSE', 'utf8'), 'license')
    t.matchSnapshot(gitConfig, 'git config')
  })
})

const originConfsNoUrl = [
  '[remote "origin"]\n' +
  '  fetch = no url here',
  ''
]
originConfsNoUrl.forEach((oc, i) => {
  t.test('git-without-origin-' + i, async t => {
    // also throw an index.js in this one, and no description
    fs.writeFileSync('index.js', 'console.log("hello")')
    fs.writeFileSync('README.md', `# foo`)
    fs.mkdirSync('.git')
    fs.writeFileSync('.git/config', `
[core]
  repositoryformatversion = 0
  filemode = true
  bare = false
  logallrefupdates = true
  ignorecase = true
  precomposeunicode = true
${oc}
`)
    // no description
    input.write('https://github.com/git-without-origin/bar\n')
    input.write('\n')
    await create({ input, output })
    t.same(logs, ['done!'])
    logs.length = 0
    t.matchSnapshot(output.read(), 'output')
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    t.matchSnapshot(pkg, 'package.json')
    t.throws(() => fs.readFileSync('.git/description'), 'no description')
    t.matchSnapshot(fs.readFileSync('README.md', 'utf8'), 'readme')
    t.matchSnapshot(fs.readFileSync('LICENSE', 'utf8'), 'license')
    t.matchSnapshot(gitConfig, 'git config')
  })
})

t.test('github-user-setting', async t => {
  gitConfig['github.user'] = 'foo'
  fs.writeFileSync('index.js', 'console.log("hello")')
  fs.writeFileSync('README.md', `# foo`)
  fs.mkdirSync('.git')
  fs.writeFileSync('.git/config', `
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
`)
  // no description
  input.write('https://github.com/github-user-setting/bar\n')
  input.write('\n')
  await create({ input, output })
  t.same(logs, ['done!'])
  logs.length = 0
  t.matchSnapshot(output.read(), 'output')
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  t.matchSnapshot(pkg, 'package.json')
  t.throws(() => fs.readFileSync('.git/description'), 'no description')
  t.matchSnapshot(fs.readFileSync('README.md', 'utf8'), 'readme')
  t.matchSnapshot(fs.readFileSync('LICENSE', 'utf8'), 'license')
  t.matchSnapshot(gitConfig, 'git config')
})

t.test('pre-existing-package', async t => {
  fs.writeFileSync('.gitignore', 'ignore some stuff')
  fs.writeFileSync('package.json', JSON.stringify({
    "name": "foo",
    "version": "0.0.0",
    "description": "describe the things",
    "author": "full-name <email@address.com> (https://my-website.com)",
    "license": "ISC",
    "scripts": {
      "test": "tap",
      "snap": "tap",
      "preversion": "npm test",
      "postversion": "npm publish",
      "postpublish": "git push origin --all; git push origin --tags",
    },
    "tap": {
      "check-coverage": true,
    },
  }))
  fs.writeFileSync('index.js', 'console.log("hello")')
  fs.writeFileSync('README.md', `# foo`)
  fs.mkdirSync('.git')
  input.write('\n')
  await create({ input, output })
  t.same(logs, ['done!'])
  logs.length = 0
  t.matchSnapshot(output.read(), 'output')
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  t.matchSnapshot(pkg, 'package.json')
  t.matchSnapshot(fs.readFileSync('.git/description'), 'description')
  t.matchSnapshot(fs.readFileSync('README.md', 'utf8'), 'readme')
  t.matchSnapshot(fs.readFileSync('LICENSE', 'utf8'), 'license')
  t.matchSnapshot(gitConfig, 'git config')
})

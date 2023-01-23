# create-isaacs

An npm init module to create modules like I do.

```sh
$ npm init isaacs [module-name] -- [flags...]
```

## Flags

- `-y` `--yes` Accept defaults from all prompts.  (Note that
  defaults are not provided for certain git configs, so it'll
  still prompt for those.  There is no guaranteed-headless mode,
  this is just a convenience to not have to mash the enter key so
  much.)
- `-a` `--always-yes` Accept defaults now, and all future runs,
  until run with `--no`, which unsets it.
- `-n` `--no` Do not accept defaults.  (This takes precedence
  over `--yes` and unsets the `--always-yes` flag, even if it was
  set on this run.)

## What It Do

This creates a hybrid TypeScript module, with tests set up to
work using [tap](https://node-tap.org/).

Default exports in CommonJS mode are supported if desired.

All source is in `./src`, all tests in `./test`.

Distribute to npm by running `npm version <whatever>`, and it'll
publish and push to git automatically.

The `engines` field in `package.json` is automatically set up to
restrict to the currently supported major node versions.

Uses the [Blue Oak 1.0.0
license](https://blueoakcouncil.org/license/1.0.0), a modern
liberal non-copyleft written in understandable plain english.

A set of GitHub Actions workflows are included, which run tests
against all currently supported node versions, and some other
niceties to ensure that the `repository` field in package.json is
set properly, and that any copyright notices in the license
file have accurate years.

(Note: Blue Oak doesn't include a copyright statement, but if
you switch to another license that does, then this will prevent
some automated emails from various organizations.)

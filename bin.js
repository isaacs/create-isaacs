#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const p = fileURLToPath(import.meta.url)
const __dirname = dirname(p)
const args = [resolve(__dirname, 'index.js'), ...process.argv.slice(2)]
const res = spawnSync(process.execPath, args, {
  stdio: 'inherit',
})
process.exit(res.exit)

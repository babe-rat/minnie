#! /usr/bin/env node
const commander = require('commander')
const generate = require('../lib/commands/generate')
const release = require('../lib/commands/release')
const changelog = require('../lib/commands/changelog')

const program = new commander.Command()

program.command('generate <name>').description('Generate Component Template').action(generate)
program.command('release').description('Release packages and generate changelogs').action(release)
program.command('changelog').description('Generate changelogs').action(changelog)
program.parse()

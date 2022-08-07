#! /usr/bin/env node
const commander = require('commander')
const run = require('../lib/run')

const program = new commander.Command()

program.command('generate <name>').description('Generate Component Template').action(run)
program.parse()

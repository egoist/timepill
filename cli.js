#!/usr/bin/env node
'use strict'

const cli = require('commander')
const pkg = require('./package')
// commands
const config = require('./commands/config')
const push = require('./commands/push')
const pull = require('./commands/pull')
const sync = require('./commands/sync')

cli
	.version(pkg.version)
	.usage('[command] <options ...>')
	
cli
	.command('config')
	.action(config)
	
cli
	.command('push')
	.action(push)

cli
	.command('pull')
	.action(pull)
	
cli
	.command('sync')
	.action(sync)
	
cli.parse(process.argv)
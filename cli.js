#!/usr/bin/env node
'use strict'

const cli = require('commander')
const pkg = require('./package')
// commands
const config = require('./commands/config')
const push = require('./commands/push')

cli
	.version(pkg.version)
	.usage('[command] <options ...>')
	
cli
	.command('config')
	.action(config)
	
cli
	.command('push')
	.action(push)
	
cli.parse(process.argv)
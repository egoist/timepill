#!/usr/bin/env node
'use strict'

const timepill = require('commander')
const pkg = require('./package')
// commands
const config = require('./commands/config')
const push = require('./commands/push')

timepill
	.version(pkg.version)
	.usage('[command] <options ...>')
	
timepill
	.command('config')
	.action(config)
	
timepill
	.command('push')
	.action(push)
	
timepill.parse(process.argv)
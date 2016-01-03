'use strict'

require('shelljs/global')
const fs = require('fs')
const path = require('path')
const pathExists = require('path-exists')
const home = require('user-home')
const store = require('../lib/store')
const config = store.all

module.exports = function () {
	let dir = exec('npm config get prefix', {silent: true}).output
	dir = path.resolve(dir.trim(), 'node_modules')
	
	let names = fs.readdirSync(dir)
	names = JSON.stringify(names, null, 2)
	
	const localGitDir = home + '/.timepill'
	
	if (pathExists.sync(localGitDir)) {
		push()
	} else {
		mkdir('-p', localGitDir)
		cd(localGitDir)
		exec('git init')
		exec(`git remote add origin ${config.url}`)
		push()
	}
	
	function push() {
		fs.writeFileSync('modules.json', names, 'utf8')
		exec('git add -A')
		exec('git commit -m "update packages"')
		exec('git push origin master')
	}
}
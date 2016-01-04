'use strict'

require('shelljs/global')
const fs = require('fs')
const path = require('path')
const pathExists = require('path-exists')
const localDir = require('../lib/getLocalDir')
const store = require('../lib/store')
const config = store.all

module.exports = function () {
	let dir = exec('npm config get prefix', {silent: true}).output
	dir = path.resolve(dir.trim(), 'node_modules')
	
	let names = fs.readdirSync(dir)
	names = JSON.stringify(names, null, 2)
	
	if (pathExists.sync(localDir)) {
		push()
	} else {
		mkdir('-p', localDir)
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
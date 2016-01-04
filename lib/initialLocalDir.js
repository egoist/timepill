'use strict'

require('shelljs/global')
const fs = require('fs')
const pathExists = require('path-exists')
const localDir = require('../lib/getLocalDir')

module.exports = function () {
	if (pathExists.sync(localDir())) {
		return localDir
	} else {
		mkdir('-p', localDir())
		cd(localGitDir)
		exec('git init')
		exec(`git remote add origin ${config.url}`)
		return localDir
	}
}
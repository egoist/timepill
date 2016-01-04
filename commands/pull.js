'use strict'

require('shelljs/global')
const dir = require('../lib/getLocalDir')

module.exports = function () {
	cd(dir)
	exec('git pull origin master')
}
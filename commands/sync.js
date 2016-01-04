'use strict'

const initialLocalDir = require('../lib/initialLocalDir')

module.exports = function () {
	const localDir = initialLocalDir()
	console.log(localDir)
}
'use strict'

const stdio = require('inquirer')
const store = require('../lib/store')

module.exports = function () {
	const questions = [
		{
			type: 'input',
			name: 'url',
			message: 'SSH address of the repo you would backup to:',
			validate (val) {
				const re = /^git\@github.com:[\w]+\/[a-zA-Z0-9\_\.\-]+\.git$/
				return re.test(val)
			}
		}
	]
	stdio.prompt(questions, answers => {
		store.set('url', answers.url)
	})
}
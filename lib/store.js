'use strict'

const Config = require('Configstore')
const pkg = require('../package')

module.exports = new Config(pkg.name, {})
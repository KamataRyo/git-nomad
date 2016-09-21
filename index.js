#!/usr/bin/env node

var exec     = require('child_process').exec
var format   = require('util').format
var whereami = require('./whereami.js').whereami

/**
 * git nommad options parsed.
 * @type {Array}
 */
var options = process.argv.slice(2)

/**
 * index of argument `message` contained for handling information
 * @type {Number}
 */
var messageIndex = -1


options.forEach((arg, index, args) => {
	// detect specific argument
	if (('--message' == arg) || ('-m' == arg)) {
		messageIndex = index + 1
	} else if ('-m' == arg.slice(0, 2)) {
		messageIndex = index
	}
})

if (messageIndex != -1) {
	whereami.then((location) => {
		options[messageIndex] = format(
			process.env.npm_package_config_messageFormat,
			options[messageIndex],
			location.latitude,
			location.latitude
		)
		command = "git commit " + options.join(' ')
		exec(command, (error, stdout, stdin) => {
			console.log(error ? error : stdout)
		})
	})
} else {
	command = "git commit " + options.join(' ')
	exec(command, (error, stdout, stdin) => {
		console.log(error ? error : stdout)
	})
}

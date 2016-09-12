#!/usr/bin/env node
var exec     = require('child_process').exec
var whereami = require('./whereami.js').whereami

var options = process.argv.slice(2)

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
		options[messageIndex] = `"${options[messageIndex]} @${location.latitude},${location.longitude}"`
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

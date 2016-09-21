/**
 * WhereAmI Nodejs wrapper.
 */

/**
 * Execute command as child process
 * @type Function
 */
var exec = require('child_process').exec;

/**
 * Parse stdout of WhereAmI and return JSON.
 * @param  {String} result [WhereAmI result from stdout]
 * @return {Object}          [Parsed JSON]
 */
parse = (result) => {
	map = {}
	result.split('\n').filter((line) => {
		elements = line.split(': ')
		if (elements.length > 1) {
			key = elements[0].replace(' (m)', '').toLowerCase()
			value = elements[1]
			map[key] = value
		}
	})
	return map
}

/**
 * Exportation wrapped by promise error handling.
 * @type {Promise}
 */
exports.whereami = new Promise((fulfilled, rejected) => {
	exec(`${__dirname}/whereami`, (error, stdout, stdin) => {
		if (error) {
			rejected(error)
		} else {
			fulfilled(parse(stdout))
		}
	})
})

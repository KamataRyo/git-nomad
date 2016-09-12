var exec = require('child_process').exec;

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

exports.whereami = new Promise((fulfilled, rejected) => {
	exec(`${__dirname}/whereami`, (error, stdout, stdin) => {
		if (error) {
			rejected(error)
		} else {
			fulfilled(parse(stdout))
		}
	})
})

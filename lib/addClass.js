var forEach = require('./forEach');
var trim = require('./trim');
var slice = require('./slice');
var shift = require('./shift');
module.exports = function () {
	var args = slice(arguments);
	var element = shift(args);
	var classList = element && element.classList;
	if (classList) {
		forEach(args, function (className) {
			forEach(trim(className).split(/\s+/), function (className) {
				classList.add(className);
			});
		});
	}
};

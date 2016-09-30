var forEach = require('./forEach');
var trim = require('./trim');
module.exports = function (element, className) {
	var classList = element.classList;
	forEach(trim(className).split(/\s+/), function (className) {
		classList.remove(className);
	});
};

var every = require('./every');
var trim = require('./trim');
module.exports = function (element, className) {
	var classList = element.classList;
	return classList && every(trim(className).split(/\s+/), function (className) {
		return classList.contains(className);
	});
};

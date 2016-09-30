var every = require('./every');
var trim = require('./trim');
module.exports = function (element, className) {
	return every(trim(className).split(/\s+/), function (className) {
		return element.classList.contains(className);
	});
};

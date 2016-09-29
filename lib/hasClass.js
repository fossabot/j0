var every = require('./every');
module.exports = function (element, className) {
	return every(className.split(/\s+/), function (className) {
		return element.classList.contains(className);
	});
};

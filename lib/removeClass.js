var forEach = require('./forEach');
var trim = require('./trim');
module.exports = function (element, className) {
	var classList = element && element.classList;
	if (classList) {
		forEach(trim(className).split(/\s+/), function (className) {
			classList.remove(className);
		});
	}
};

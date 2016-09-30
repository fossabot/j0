var forEach = require('./forEach');
var trim = require('./trim');
module.exports = function (element, className) {
	forEach(trim(className).split(/\s+/), function (className) {
		element.classList.add(className);
	});
};

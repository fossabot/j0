var forEach = require('./forEach');
module.exports = function (element, className) {
	forEach(className.split(/\s+/), function (className) {
		element.classList.add(className);
	});
};

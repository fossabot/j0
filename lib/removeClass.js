var forEach = require('./forEach');
module.exports = function (element, className) {
	var classList = element.classList;
	forEach(className.split(/\s+/), function (className) {
		classList.remove(className);
	});
};

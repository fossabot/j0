var parentNode = require('./parentNode');
var trigger = require('./trigger');
module.exports = function (element, parentElement) {
	if (!parentElement) {
		parentElement = parentNode(element);
	}
	if (parentElement) {
		trigger(element, 'remove');
		element = parentElement.removeChild(element);
	}
	return element;
};

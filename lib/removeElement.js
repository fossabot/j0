var parentNode = require('./parentNode');
module.exports = function (element, parentElement) {
	if (!parentElement) {
		parentElement = parentNode(element);
	}
	if (parentElement) {
		element = parentElement.removeChild(element);
	}
	return element;
};

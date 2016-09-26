var parentNode = require('./parentNode');
module.exports = function (referenceElement, newElement, parentElement) {
	if (!parentElement) {
		parentElement = parentNode(referenceElement);
	}
	return parentElement.insertBefore(newElement, referenceElement);
};

var parentNode = require('./parentNode');
var insertBefore = require('./insertBefore');
var nextSibling = require('./nextSibling');
module.exports = function (referenceElement, newElement, parentElement) {
	if (!parentElement) {
		parentElement = parentNode(referenceElement);
	}
	return insertBefore(nextSibling(referenceElement), newElement, parentElement);
};

var removeElement = require('./removeElement');
var firstChild = require('./firstChild');
var nextSibling = require('./nextSibling');
module.exports = function (element) {
	var sibling = firstChild(element);
	var next;
	while (sibling) {
		next = nextSibling(sibling);
		removeElement(sibling, element);
		sibling = next;
	}
};

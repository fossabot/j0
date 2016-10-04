var nextSibling = require('./nextSibling');
var previousSibling = require('./previousSibling');
module.exports = function (element, fn) {
	var index = 0;
	var sibling = previousSibling(element);
	while (sibling) {
		fn(sibling, --index);
		sibling = previousSibling(sibling);
	}
	index = 0;
	sibling = nextSibling(element);
	while (sibling) {
		fn(sibling, ++index);
		sibling = previousSibling(sibling);
	}
};

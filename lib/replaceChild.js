var parentNode = require('./parentNode');
module.exports = function (newChild, oldChild, parentElement) {
	if (!parentElement) {
		parentElement = parentNode(oldChild);
	}
	return parentElement.replaceChild(newChild, oldChild);
};

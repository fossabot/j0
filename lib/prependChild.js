var insertBefore = require('./insertBefore');
var firstChild = require('./firstChild');
module.exports = function (parentElement, childElement) {
	return insertBefore(firstChild(parentElement), childElement, parentElement);
};

var insertBefore = require('./insertBefore');
module.exports = function (parentElement, childElement) {
	return insertBefore(parentElement.firstChild, childElement, parentElement);
};

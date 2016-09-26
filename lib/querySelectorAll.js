var document = require('./document');
module.exports = function (selectors, element) {
	if (!element) {
		element = document;
	}
	return element.querySelectorAll(selectors);
};

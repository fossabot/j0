var isUndefined = require('./isUndefined');
var camelCase = require('./camelCase');
module.exports = function (element, attributeName, attributeValue) {
	if (isUndefined(attributeValue)) {
		attributeValue = '';
	} else {
		attributeValue += '';
	}
	try {
		element.setAttribute(attributeName, attributeValue);
	} catch (error) {
		// On IE and Edge, setAttribute throws an error on setting a "data-" prefixed attribute.
		// Then try to set it with the element.dataset API.
		if (element.dataset) {
			attributeName = attributeName.replace(/^data-(.*)$/, function (match, noDataPrefixName) {
				element.dataset[camelCase(noDataPrefixName)] = attributeValue;
				return '';
			});
		}
		if (attributeName) {
			throw error;
		}
	}
};

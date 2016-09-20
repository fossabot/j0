var camelCase = require('./camelCase');
module.exports = function (element, attributeName) {
	var value;
	// On IE Edge, getAttribute cannot get a "data-" prefixed attribute.
	if (element.dataset) {
		attributeName = attributeName.replace(/^data-(.*)$/, function (match, noDataPrefixName) {
			value = element.dataset[camelCase(noDataPrefixName)];
			return '';
		});
	}
	if (attributeName && element.getAttribute) {
		value = element.getAttribute(attributeName);
	}
	if (!value) {
		value = '';
	}
	return value;
};

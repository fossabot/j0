module.exports = function (className, rootElement) {
	if (!rootElement) {
		rootElement = require('./document');
	}
	return rootElement.getElementsByTagName(className);
};

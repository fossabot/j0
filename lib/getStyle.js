var getComputedStyle = require('./getComputedStyle');
var parseFloat = require('./parseFloat');
module.exports = function (element, propertyName, asNumber) {
	var value = getComputedStyle(element)[propertyName];
	if (asNumber) {
		value = parseFloat(value);
	}
	return value;
};

var map = require('./map');
module.exports = function (element) {
	return map(element.attributes, function (attribute) {
		return [attribute.name, attribute.value];
	});
};

var getStyle = require('./getStyle');
module.exports = function (element) {
	return getStyle(element, 'background-image').replace(/url\(['"]?([^'"\s]*)['"]?\)/, '$1');
};

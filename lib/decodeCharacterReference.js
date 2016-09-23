var createElement = require('./createElement');
var getTextContent = require('./getTextContent');
module.exports = function (source) {
	return source ? getTextContent(createElement({
		after: function (element) {
			element.innerHTML = source
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/\x20|\xa0|\u2002|\u2003|\u2009/g, '&nbsp;')
				.replace(/\r/g, '&#13;')
				.replace(/\n/g, '&#10;');
		}
	})).replace(/\x20|\xa0|\u2002|\u2003|\u2009/g, ' ') : '';
};

var createElement = require('./createElement');
var getTextContent = require('./getTextContent');
module.exports = function (source) {
	return source ? getTextContent(createElement({
		after: function (element) {
			element.innerHTML = source
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/&OverBar;/g, '&#175;')
				.replace(/&UnderBar;/g, '&#818;')
				.replace(/&epsiv;/g, '&#949;')
				.replace(/&varepsilon;/g, '&#949;')
				.replace(/&phiv;/g, '&#966;')
				.replace(/&varphi;/g, '&#966;')
				.replace(/&epsi;/g, '&#1013;')
				.replace(/&ohm;/g, '&#8486;')
				.replace(/&angst;/g, '&#8491;')
				.replace(/&race;/g, '&#10714;')
				.replace(/[\s\x20\xa0\u2002-\u200b]/g, function (char) {
					return '&#' + char.codePointAt(char) + ';';
				});
		}
	})) : '';
};

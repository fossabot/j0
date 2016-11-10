var createElement = require('./createElement');
var appendChild = require('./appendChild');
var document = require('./document');

module.exports = function (href, id) {
	return appendChild(document.head, createElement({
		t: 'link',
		a: [
			['id', id || ''],
			['rel', 'stylesheet'],
			['href', href]
		]
	}));
};

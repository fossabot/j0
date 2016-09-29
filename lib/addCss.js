module.exports = function (href, id) {
	var createElement = require('./createElement');
	var appendChild = require('./appendChild');
	return appendChild(require('./document').head, createElement({
		t: 'link',
		a: [
			['id', id || ''],
			['rel', 'stylesheet'],
			['href', href]
		]
	}));
};

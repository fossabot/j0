module.exports = function (src, id) {
	var Promise = require('./Promise');
	return new Promise(function (resolve, reject) {
		var head = require('./document').head;
		var createElement = require('./createElement');
		var appendChild = require('./appendChild');
		var setTimeout = require('./setTimeout');
		appendChild(head, createElement({
			t: 'script',
			a: [
				['src', src],
				['id', id]
			],
			e: [
				['load', function () {
					setTimeout(resolve);
				}],
				['error', reject]
			]
		}));
	});
};

var Promise = require('./Promise');
var createElement = require('./createElement');
var appendChild = require('./appendChild');
var setTimeout = require('./setTimeout');
var document = require('./document');
module.exports = function (src, id) {
	return new Promise(function (resolve, reject) {
		appendChild(document.head, createElement({
			t: 'script',
			a: [
				['src', src],
				['id', id]
			],
			e: [
				['load', function () {
					var scriptElement = this;
					setTimeout(function () {
						resolve(scriptElement);
					});
				}],
				['error', reject]
			]
		}));
	});
};

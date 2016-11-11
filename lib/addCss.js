var Promise = require('./Promise');
var createElement = require('./createElement');
var appendChild = require('./appendChild');
var document = require('./document');
var setTimeout = require('./setTimeout');
module.exports = function (href, id) {
	return new Promise(function (resolve, reject) {
		appendChild(document.head, createElement({
			t: 'link',
			a: [
				['id', id || ''],
				['rel', 'stylesheet'],
				['href', href]
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

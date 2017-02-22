var Promise = require('./Promise');
var createElement = require('./createElement');
var getElementById = require('./getElementById');
var appendChild = require('./appendChild');
var document = require('./document');
var setTimeout = require('./setTimeout');
module.exports = function (href, id) {
	id = id || href.replace(/[^\w]/g, '_');
	return new Promise(function (resolve, reject) {
		if (getElementById(id)) {
			resolve();
		} else {
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
		}
	});
};

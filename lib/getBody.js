var Promise = require('./Promise');
var setTimeout = require('./setTimeout');
var document = require('./document');
module.exports = function () {
	return new Promise(function (resolve) {
		var get = function () {
			var body = document.body;
			if (body) {
				resolve(body);
			} else {
				setTimeout(get, 100);
			}
		};
		get();
	});
};

var Promise = require('./Promise');
var setTimeout = require('./setTimeout');

module.exports = function (delay, data) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(data);
		}, delay || 0);
	});
};

module.exports = function (delay, data) {
	var Promise = require('./Promise');
	var setTimeout = require('./setTimeout');
	return new Promise(function (resolve) {
		setTimeout(function () {
			resolve(data);
		}, delay || 0);
	});
};

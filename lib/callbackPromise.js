var Promise = require('./Promise');
module.exports = function (fn) {
	return new Promise(function (resolve, reject) {
		fn(function (error, result) {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
};

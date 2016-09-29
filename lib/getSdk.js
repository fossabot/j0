var addScript = require('./addScript');
var Promise = require('./Promise');
var Error = require('./Error');
var setTimeout = require('./setTimeout');
var promises = {};
module.exports = function (src, id, sdkGetter) {
	return function (force) {
		var promise = promises[id];
		if (force) {
			promise = false;
		}
		if (!promise) {
			promise = promises[id] = addScript(src, id).then(function () {
				return new Promise(function (resolve, reject) {
					var count = 0;
					var callGetter = function () {
						var sdk = sdkGetter();
						if (sdk) {
							resolve(sdk);
						} else if (count < 20) {
							count += 1;
							setTimeout(callGetter, 100);
						} else {
							reject(new Error('timeout'));
						}
					};
					callGetter();
				});
			});
		}
		return promise;
	};
};

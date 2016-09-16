var forEach = require('./forEach');
module.exports = function (iterable, fn) {
	var results = [];
	if (!fn) {
		fn = function (x) {
			return x;
		};
	}
	forEach(iterable, function (value, index, iterable) {
		results[index] = fn(value, index, iterable);
	});
	return results;
};

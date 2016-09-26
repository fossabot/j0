var forEach = require('./forEach');
module.exports = function (iterable, fn, memo) {
	forEach(iterable, function (value, index, iterable) {
		memo = fn(memo, value, index, iterable);
	});
	return memo;
};

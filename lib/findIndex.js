var isFunction = require('./isFunction');
var forEach = require('./forEach');
module.exports = function (iterable, checker) {
	var result = -1;
	var fn;
	if (isFunction(checker)) {
		fn = checker;
	} else {
		fn = function (item) {
			return item === checker;
		};
	}
	if (iterable.findIndex) {
		result = iterable.findIndex(fn);
	} else {
		forEach(iterable, function (value, index, iterable) {
			if (fn(value, index, iterable)) {
				result = index;
				return true;
			}
		});
	}
	return result;
};

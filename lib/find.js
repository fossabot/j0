var isFunction = require('./isFunction');
var forEach = require('./forEach');
module.exports = function (iterable, checker) {
	var result;
	var fn;
	if (isFunction(checker)) {
		fn = checker;
	} else {
		fn = function (item) {
			return item === checker;
		};
	}
	if (iterable.find) {
		result = iterable.find(fn);
	} else {
		forEach(iterable, function (value, index, iterable) {
			if (fn(value, index, iterable)) {
				result = value;
				return true;
			}
		});
	}
	return result;
};

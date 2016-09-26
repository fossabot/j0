var isFunction = require('./isFunction');
var isUndefined = require('./isUndefined');
var forEach = require('./forEach');
module.exports = function (iterable, checker) {
	var result;
	var fn;
	if (isFunction(checker)) {
		fn = checker;
	} else if (isUndefined(checker)) {
		fn = function (item) {
			return !!item;
		};
	} else {
		fn = function (item) {
			return checker === item;
		};
	}
	if (iterable.every) {
		result = iterable.every(fn);
	} else {
		result = false;
		forEach(iterable, function (item, index, iterable) {
			result = fn(item, index, iterable);
			return !result;
		});
	}
	return result;
};

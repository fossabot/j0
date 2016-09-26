var isFunction = require('./isFunction');
var isUndefined = require('./isUndefined');
var forEach = require('./forEach');
var push = require('./push');
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
			return item === checker;
		};
	}
	if (iterable.filter) {
		result = iterable.filter(fn);
	} else {
		result = [];
		forEach(iterable, function (value, index, iterable) {
			if (fn(value, index, iterable)) {
				push(result, value);
			}
		});
	}
	return result;
};

var push = require('./push');
var isUndefined = require('./isUndefined');
module.exports = function (iterable, begin, end) {
	var iterableLength;
	var result;
	var i;
	if (iterable.slice) {
		result = iterable.slice(begin, end);
	} else {
		if (isUndefined(begin)) {
			begin = 0;
		}
		iterableLength = iterable.length;
		if (isUndefined(end) || iterableLength < end) {
			end = iterableLength;
		} else if (end < 0) {
			end += iterableLength;
		}
		result = [];
		for (i = begin; i < end; i++) {
			push(result, iterable[i]);
		}
	}
	return result;
};

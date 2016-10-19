var forEach = require('./forEach');
var isArray = require('./isArray');
var recursiveForEach = module.exports = function (item, fn, iterable, offset) {
	if (!offset) {
		offset = 0;
	}
	if (isArray(item)) {
		forEach(item, function (childItem) {
			offset = recursiveForEach(childItem, fn, iterable, offset);
		});
	} else {
		fn(item, offset++, iterable);
	}
	return offset;
};

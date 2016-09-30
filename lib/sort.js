var slice = require('./slice');
module.exports = function (iterable, sorter) {
	if (iterable.sort) {
		iterable.sort(sorter);
	} else {
		iterable = slice(iterable).sort(sorter);
	}
	return iterable;
};

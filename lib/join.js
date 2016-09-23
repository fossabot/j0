var slice = require('./slice');
module.exports = function (iterable, delimiter) {
	if (!iterable.join) {
		iterable = slice(iterable);
	}
	return iterable.join(delimiter);
};

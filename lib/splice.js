var slice = require('./slice');
var shift = require('./shift');
var forEach = require('./forEach');
module.exports = function () {
	var args = slice(arguments);
	var iterable = shift(args);
	var removedElements;
	var copied;
	var initialLength;
	var currentLength;
	var i;
	if (iterable.splice) {
		removedElements = iterable.splice.apply(iterable, args);
	} else {
		initialLength = iterable.length;
		copied = slice(iterable);
		removedElements = copied.splice.apply(copied, args);
		forEach(copied, function (value, index) {
			iterable[index] = value;
		});
		currentLength = iterable.length = copied.length;
		for (i = currentLength; i < initialLength; i++) {
			delete iterable[i];
		}
	}
	return removedElements;
};

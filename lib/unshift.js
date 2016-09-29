var shift = require('./shift');
var slice = require('./slice');
var forEach = require('./forEach');
module.exports = function () {
	var args = arguments;
	var iterable = shift(args);
	var copied;
	if (iterable.unshift) {
		iterable.unshift.apply(iterable, args);
	} else {
		copied = slice(iterable);
		copied.unshift.apply(copied, args);
		forEach(copied, function (value, index) {
			iterable[index] = value;
		});
		iterable.length = copied.length;
	}
	return iterable.length;
};

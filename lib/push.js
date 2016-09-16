var shift = require('./shift');
var forEach = require('./forEach');
module.exports = function () {
	var args = arguments;
	var iterable = shift(args);
	if (iterable.push) {
		iterable.push.apply(iterable, args);
	} else {
		forEach(args, function (value) {
			iterable[iterable.length] = value;
			iterable.length++;
		});
	}
	return iterable.length;
};

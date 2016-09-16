var isFunction = require('./isFunction');
var forEach = require('./forEach');
module.exports = function (iterable) {
	var item;
	if (isFunction(iterable.shift)) {
		item = iterable.shift();
	} else {
		item = iterable[0];
		forEach(iterable, function (value, index, iterable) {
			delete iterable[index];
			if (0 === index) {
				item = value;
			} else {
				iterable[index - 1] = value;
			}
		});
		iterable.length--;
	}
	return item;
};

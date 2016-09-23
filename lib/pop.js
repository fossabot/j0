var isFunction = require('./isFunction');
module.exports = function (iterable) {
	var targetIndex;
	var item;
	if (isFunction(iterable.pop)) {
		item = iterable.pop();
	} else {
		targetIndex = iterable.length - 1;
		item = iterable[targetIndex];
		delete iterable[targetIndex];
		iterable.length--;
	}
	return item;
};

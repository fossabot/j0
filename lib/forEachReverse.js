module.exports = function (iterable, fn) {
	var i;
	for (i = iterable.length - 1; 0 <= i; i--) {
		if (fn(iterable[i], i, iterable)) {
			break;
		}
	}
	return iterable;
};

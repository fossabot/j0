module.exports = function (iterable, fn) {
	var i;
	var iterableLength = iterable.length;
	for (i = 0; i < iterableLength; i++) {
		if (fn(iterable[i], i, iterable)) {
			break;
		}
	}
	return iterable;
};

module.exports = function (x, lowerLimit, upperLimit) {
	if (x < lowerLimit) {
		x = lowerLimit;
	}
	if (upperLimit < x) {
		x = upperLimit;
	}
	return x;
};

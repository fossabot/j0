var isUndefined = require('./isUndefined');
var Math = require('./Math');
var log10 = Math.log10;
var floor = Math.floor;
var pow = Math.pow;

var S_BIG_PREFIXES = ' kMGTPEZY';

module.exports = function (x, digits) {
	var result;
	if (isUndefined(digits)) {
		digits = 1;
	}
	if (x < 1000) {
		result = x;
	} else {
		result = log10(x);
		result = pow(10, result % 3).toFixed(digits) + S_BIG_PREFIXES[floor(result / 3)];
	}
	return result;
};

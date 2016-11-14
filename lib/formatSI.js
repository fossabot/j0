var Math = require('./Math');
var log10 = Math.log10;
var floor = Math.floor;
var pow = Math.pow;

var S_BIG_PREFIXES = ' kMGTPEZY';

module.exports = function (x) {
	var result;
	if (x < 1000) {
		result = x;
	} else {
		result = log10(x);
		result = pow(10, result % 3).toFixed(1) + S_BIG_PREFIXES[floor(result / 3)];
	}
	return result;
};

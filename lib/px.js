var isNumber = require('./isNumber');
module.exports = function (x) {
	if (isNumber(x)) {
		x = x.toFixed(0);
	}
	return x === '0' ? x : x + 'px';
};

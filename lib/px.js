var isNumber = require('./isNumber');
var round = require('./Math').round;
module.exports = function (x) {
	if (isNumber(x)) {
		x = round(x);
	}
	return x + 'px';
};

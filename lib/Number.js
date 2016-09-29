var window = require('./window');
var isNumber = require('./isNumber');
var exports = module.exports = Number;

(function (Number, isFinite) {
	if (!Number.isFinite) {
		Number.isFinite = function (x) {
			return isNumber(x) && isFinite(x);
		};
	}
})(exports, window.isFinite);

(function (Number, isNaN) {
	if (!Number.isNaN) {
		Number.isNaN = function (x) {
			return isNumber(x) && isNaN(x);
		};
	}
})(exports, window.isNaN);

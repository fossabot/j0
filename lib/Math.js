var shim = require('./shim');
var isNaN = require('./isNaN');
var exports = module.exports = Math;

shim(exports, 'acosh', function (x) {
	return exports.log(x + exports.sqrt(x * x - 1));
});

shim(exports, 'asinh', function (x) {
	if (x === -Infinity) {
		return x;
	} else {
		return exports.log(x + exports.sqrt(x * x + 1));
	}
});

shim(exports, 'atanh', function (x) {
	return exports.log((1 + x) / (1 - x)) / 2;
});

shim(exports, 'cbrt', function (x) {
	var y = exports.pow(exports.abs(x), 1 / 3);
	return x < 0 ? -y : y;
});

shim(exports, 'clz32', function (x) {
	/* jshint -W016 */
	var y = Number(x) >>> 0;
	return y ? 32 - y.toString(2).length : 32;
});

shim(exports, 'cosh', function (x) {
	return (exports.exp(x) + exports.exp(-x)) / 2;
});

shim(exports, 'expm1', function (x) {
	return exports.exp(x) - 1;
});

shim(exports, 'fround', function (x) {
	return new Float32Array([x])[0];
});

shim(exports, 'hypot', function () {
	var args = arguments;
	var length = args.length;
	var value;
	var i;
	var sum = 0;
	for (i = 0; i < length; i++) {
		value = args[i];
		if (value === Infinity || value === -Infinity) {
			return Infinity;
		}
		sum += value * value;
	}
	return exports.sqrt(sum);
});

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
shim(exports, 'imul', function (a, b) {
	/* jshint -W016 */
	var ah = (a >>> 16) & 0xffff;
	var al = a & 0xffff;
	var bh = (b >>> 16) & 0xffff;
	var bl = b & 0xffff;
	return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
});

shim(exports, 'log1p', function (x) {
	return exports.log(1 + x);
});

shim(exports, 'log10', function (x) {
	return exports.log(x) / exports.LN10;
});

shim(exports, 'log2', function (x) {
	return exports.log(x) / exports.LN2;
});

shim(exports, 'sign', function (x) {
	x = +x;
	if (x === 0 || isNaN(x)) {
		return x;
	}
	return x > 0 ? 1 : -1;
});

shim(exports, 'sinh', function (x) {
	return (exports.exp(x) - exports.exp(-x)) / 2;
});

shim(exports, 'tanh', function (x) {
	if (x === Infinity) {
		x = 1;
	} else if (x === -Infinity) {
		x = -1;
	} else {
		x = exports.exp(2 * x);
		x = (x - 1) / (x + 1);
	}
	return x;
});

shim(exports, 'trunc', function (x) {
	return x < 0 ? exports.ceil(x) : exports.floor(x);
});

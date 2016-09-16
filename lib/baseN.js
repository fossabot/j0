var Math = require('./Math');
module.exports = function (base) {
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var pow = Math.pow;
	var floor = Math.floor;
	var findIndex = require('./findIndex');
	var seed = chars.slice(0, base);
	var encoder = function (d) {
		var encoded = '';
		while (0 < d) {
			encoded = seed.charAt(d % base) + encoded;
			d = floor(d / base);
		}
		return encoded || '0';
	};
	base = seed.length;
	encoder.base = base;
	encoder.decode = function (s) {
		return s.split('').reverse().reduce(function (previous, c, index) {
			return previous + findIndex(seed, c) * pow(base, index);
		}, 0);
	};
	return encoder;
};

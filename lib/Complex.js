var Object = require('./Object');
var Math = require('./Math');
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var atan2 = Math.atan2;
var pow = Math.pow;
var PI2 = Math.PI * 2;

var S_real = 'real';
var S_imaginary = 'imaginary';
var S_radius = 'radius';
var S_arg = 'arg';

function Complex() {}

(function (prototype) {

	prototype.toString = function () {
		var c = this;
		var real = c[S_real];
		var imaginary = c[S_imaginary];
		var result = real;
		if (0 <= imaginary) {
			result += '+' + imaginary;
		} else {
			result += '-' + (-imaginary);
		}
		return result + 'i';
	};

	prototype.equal = function (c2) {
		var c1 = this;
		return c1[S_real] === c2[S_real] && c1[S_imaginary] === c2[S_imaginary];
	};

	prototype.add = function (c2) {
		var c1 = this;
		return Complex.xy(c1[S_real] + c2[S_real], c1[S_imaginary] += c2[S_imaginary]);
	};

	prototype.multiply = function (c2) {
		var c1 = this;
		return Complex.xy(c1[S_real] * c2[S_real] - c1[S_imaginary] * c2[S_imaginary], c1[S_imaginary] * c2[S_real] + c1[S_real] * c2[S_imaginary]);
	};

	prototype.conjugate = function () {
		return Complex.xy(this[S_real], -this[S_imaginary]);
	};

	prototype.reciprocal = function () {
		var c = this;
		var d = c.multiply(c.conjugate())[S_real];
		return Complex.xy(c[S_real] / d, -c[S_imaginary] / d);
	};

	prototype.subtract = function (c2) {
		var c1 = this;
		return c1.add(c2.scale(-1));
	};

	prototype.devide = function (c2) {
		var c1 = this;
		return c1.multiply(c2.reciprocal());
	};

	prototype.scale = function (x) {
		var c = this;
		return Complex.xy(x * c[S_real], x * c[S_imaginary]);
	};

	prototype.pow = function (x) {
		var c = this;
		return Complex.polar(pow(c[S_radius], x), x * c[S_arg]);
	};

})(Complex.prototype);

Complex.xy = function (real, imaginary) {
	var c = new Complex();
	Object.defineProperties(c, {
		real: {
			value: real
		},
		imaginary: {
			value: imaginary || 0
		},
		arg: {
			value: atan2(imaginary, real)
		},
		radius: {
			value: sqrt(real * real + imaginary * imaginary)
		}
	});
	return c;
};

Complex.polar = function (radius, arg) {
	var c = new Complex();
	Object.defineProperties(c, {
		real: {
			value: radius * cos(arg)
		},
		imaginary: {
			value: radius * sin(arg)
		},
		arg: {
			value: arg % PI2
		},
		radius: {
			value: radius
		}
	});
	return c;
};

Complex.real = function (real) {
	return Complex.xy(real, 0);
};

Complex.sqrt = function (x) {
	var real;
	var imaginary;
	if (0 <= x) {
		real = sqrt(x);
		imaginary = 0;
	} else {
		real = 0;
		imaginary = sqrt(-x);
	}
	return Complex.xy(real, imaginary);
};

Complex.w1 = Complex.polar(1, 0);
Complex.w2 = Complex.polar(1, PI2 / 3);
Complex.w3 = Complex.polar(1, 2 * PI2 / 3);

module.exports = Complex;

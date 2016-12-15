var Object = require('./Object');
var Math = require('./Math');
var sqrt = Math.sqrt;
var atan2 = Math.atan2;

function Complex(real, imaginary) {
	var c = this;
	Object.defineProperties(c, {
		r: {
			value: real
		},
		i: {
			value: imaginary
		}
	});
}

(function (prototype) {

	prototype.toString = function () {
		var c = this;
		var real = c.r;
		var imaginary = c.i;
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
		return c1.r === c2.r && c1.i === c2.i;
	};

	prototype.add = function (c2) {
		var c1 = this;
		return new Complex(c1.r + c2.r, c1.i += c2.i);
	};

	prototype.multiply = function (c2) {
		var c1 = this;
		return new Complex(c1.r * c2.r - c1.i * c2.i, c1.i * c2.r + c1.r * c2.i);
	};

	prototype.conjugate = function () {
		return new Complex(this.r, -this.i);
	};

	prototype.arg = function () {
		return atan2(this.i, this.r);
	};

	prototype.reciprocal = function () {
		var c = this;
		var d = c.multiply(c.conjugate()).r;
		return new Complex(c.r / d, -c.i / d);
	};

	prototype.abs = function () {
		var c = this;
		return sqrt(c.multiply(c.conjugate()).r);
	};

	prototype.devide = function (c2) {
		var c1 = this;
		return c1.multiply(c2.reciprocal());
	};

})(Complex.prototype);

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
	return new Complex(real, imaginary);
};

module.exports = Complex;

var assert = require('assert');
var map = require('../lib/map');
var Complex = require('../lib/Complex');
var Math = require('../lib/Math');
var random = Math.random;

var near = function (a, b) {
	var d = a - b;
	if (d < 0) {
		d *= -1;
	}
	return d < 1E-6;
};

var nearC = function (a, b) {
	return near(a.multiply(Complex.real(-1)).add(b).radius, 0);
};

describe('Complex', function () {

	it('should create from real part and imaginary part', function () {
		var c = Complex.xy(3, 4);
		assert.deepEqual([
			near(c.real, 3),
			near(c.imaginary, 4),
			near(c.radius, 5),
			near(c.arg, 0.927295218)
		], [
			true,
			true,
			true,
			true
		]);
	});

	it('should create from radius and arg', function () {
		var c = Complex.polar(3, 0.2);
		assert.deepEqual([
			near(c.real, 2.9401997335237),
			near(c.imaginary, 0.5960079923851),
			near(c.radius, 3),
			near(c.arg, 0.2)
		], [
			true,
			true,
			true,
			true
		]);
	});

	it('should protect its value', function () {
		var r = random();
		var i = random();
		var c = Complex.xy(r, i);
		c.i = random();
		c.r = random();
		assert.equal(near(c.real, r), true);
		assert.equal(near(c.imaginary, i), true);
	});

	it('should compare two numbers', function () {
		var r = random();
		var i = random();
		assert.equal(Complex.xy(r, i).equal(Complex.xy(r, i)), true);
		assert.equal(Complex.xy(r, i).equal(Complex.xy(r, i + 1)), false);
		assert.equal(Complex.xy(r, i).equal(Complex.xy(r + 1, i)), false);
	});

	map([
		[[1, 2], [0.2, -0.4]],
		[[3, 4], [0.12, -0.16]]
	], function (test) {
		var c = test[0];
		var expected = test[1];
		c = Complex.xy(c[0], c[1]);
		expected = Complex.xy(expected[0], expected[1]);
		it('should calculate 1/(' + c.toString() + ') = ' + expected.toString(), function () {
			assert.equal(nearC(c.reciprocal(), expected), true);
		});
	});

	map([
		[[1, 2], [3, 4], [4, 6]],
		[[1, 2], [3, -4], [4, -2]]
	], function (test) {
		var c1 = test[0];
		var c2 = test[1];
		var expected = test[2];
		c1 = Complex.xy(c1[0], c1[1]);
		c2 = Complex.xy(c2[0], c2[1]);
		expected = Complex.xy(expected[0], expected[1]);
		it('should calculate (' + c1.toString() + ') + (' + c2.toString() + ') = ' + expected.toString(), function () {
			assert.equal(nearC(c1.add(c2), expected), true);
		});
	});

	map([
		[[1, 2], [3, 4], [-2, -2]],
		[[1, 2], [3, -4], [-2, 6]]
	], function (test) {
		var c1 = test[0];
		var c2 = test[1];
		var expected = test[2];
		c1 = Complex.xy(c1[0], c1[1]);
		c2 = Complex.xy(c2[0], c2[1]);
		expected = Complex.xy(expected[0], expected[1]);
		it('should calculate (' + c1.toString() + ') - (' + c2.toString() + ') = ' + expected.toString(), function () {
			assert.equal(nearC(c1.subtract(c2), expected), true);
		});
	});

	map([
		[[1, 2], [3, 4], [-5, 10]],
		[[1, 2], [3, -4], [11, 2]]
	], function (test) {
		var c1 = test[0];
		var c2 = test[1];
		var expected = test[2];
		c1 = Complex.xy(c1[0], c1[1]);
		c2 = Complex.xy(c2[0], c2[1]);
		expected = Complex.xy(expected[0], expected[1]);
		it('should calculate (' + c1.toString() + ') * (' + c2.toString() + ') = ' + expected.toString(), function () {
			assert.equal(nearC(c1.multiply(c2), expected), true);
		});
	});

	map([
		[3, [Math.sqrt(3), 0]],
		[-2, [0, Math.sqrt(2)]]
	], function (test) {
		var r = test[0];
		var expected = test[1];
		expected = Complex.xy(expected[0], expected[1]);
		it('should calculate sqrt(' + r + ') = ' + expected.toString(), function () {
			assert.equal(nearC(Complex.sqrt(r), expected), true);
		});
	});

	map([
		[[1, 2], 3, [3, 6]],
		[[3, 4], 2.5, [7.5, 10]],
		[[5, 6], 1 / 3, [5 / 3, 6 / 3]]
	], function (test) {
		var c = test[0];
		var x = test[1];
		var expected = test[2];
		c = Complex.xy(c[0], c[1]);
		expected = Complex.xy(expected[0], expected[1]);
		it('should calculate (' + c.toString() + ') *' + x + ' = ' + expected.toString(), function () {
			assert.equal(nearC(c.scale(x), expected), true);
		});
	});

	map([
		[[1, 2], 3, [-11, -2]],
		[[3, 4], 2.5, [-38, 41]],
		[[5, 6], 1 / 3, [1.900064545092889267, 0.571184652790255704788171]]
	], function (test) {
		var c = test[0];
		var x = test[1];
		var expected = test[2];
		c = Complex.xy(c[0], c[1]);
		expected = Complex.xy(expected[0], expected[1]);
		it('should calculate (' + c.toString() + ')^' + x + ' = ' + expected.toString(), function () {
			assert.equal(nearC(c.pow(x), expected), true);
		});
	});

});

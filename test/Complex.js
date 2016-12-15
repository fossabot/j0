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
	return near(a.multiply(new Complex(-1, 0)).add(b).abs(), 0);
};

describe('Complex', function () {

	it('should have real part and imaginary part', function () {
		var r = random();
		var i = random();
		var c = new Complex(r, i);
		assert.equal(c.r, r);
		assert.equal(c.i, i);
	});

	it('should protect its value', function () {
		var r = random();
		var i = random();
		var c = new Complex(r, i);
		c.i = random();
		c.r = random();
		assert.equal(c.r, r);
		assert.equal(c.i, i);
	});

	it('should compare two numbers', function () {
		var r = random();
		var i = random();
		assert.equal(new Complex(r, i).equal(new Complex(r, i)), true);
		assert.equal(new Complex(r, i).equal(new Complex(r, i + 1)), false);
		assert.equal(new Complex(r, i).equal(new Complex(r + 1, i)), false);
	});

	map([
		[[1, 2], Math.sqrt(5)],
		[[1, -2], Math.sqrt(5)]
	], function (test) {
		var c = test[0];
		var expected = test[1];
		c = new Complex(c[0], c[1]);
		it('should calculate |' + c.toString() + '| = ' + expected.toString(), function () {
			assert.equal(near(c.abs(), expected), true);
		});
	});

	map([
		[[1, 1], Math.PI / 4],
		[[-1, 1], 3 * Math.PI / 4],
		[[1, 2], 1.107148717],
		[[1, -2], -1.107148717]
	], function (test) {
		var c = test[0];
		var expected = test[1];
		c = new Complex(c[0], c[1]);
		it('should calculate arg(' + c.toString() + ') = ' + expected.toString(), function () {
			assert.equal(near(c.arg(), expected), true);
		});
	});

	map([
		[[1, 2], [0.2, -0.4]],
		[[3, 4], [0.12, -0.16]]
	], function (test) {
		var c = test[0];
		var expected = test[1];
		c = new Complex(c[0], c[1]);
		expected = new Complex(expected[0], expected[1]);
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
		c1 = new Complex(c1[0], c1[1]);
		c2 = new Complex(c2[0], c2[1]);
		expected = new Complex(expected[0], expected[1]);
		it('should calculate (' + c1.toString() + ') + (' + c2.toString() + ') = ' + expected.toString(), function () {
			assert.equal(nearC(c1.add(c2), expected), true);
		});
	});

	map([
		[[1, 2], [3, 4], [-5, 10]],
		[[1, 2], [3, -4], [11, 2]]
	], function (test) {
		var c1 = test[0];
		var c2 = test[1];
		var expected = test[2];
		c1 = new Complex(c1[0], c1[1]);
		c2 = new Complex(c2[0], c2[1]);
		expected = new Complex(expected[0], expected[1]);
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
		expected = new Complex(expected[0], expected[1]);
		it('should calculate sqrt(' + r + ') = ' + expected.toString(), function () {
			assert.equal(nearC(Complex.sqrt(r), expected), true);
		});
	});

});

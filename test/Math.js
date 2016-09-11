describe('Math', function () {

	var assert = require('assert');
	var Math = require('../lib/Math');
	var isNear = function (a, b) {
		return Math.abs(a - b) < 0.00001;
	};

	it('should have E', function () {
		assert.equal(isNear(Math.E, 2.71828), true);
	});

	it('should have LN2', function () {
		assert.equal(isNear(Math.LN2, 0.69314), true);
	});

	it('should have LN10', function () {
		assert.equal(isNear(Math.LN10, 2.30258), true);
	});

	it('should have LOG2E', function () {
		assert.equal(isNear(Math.LOG2E, 1.44269), true);
	});

	it('should have LOG10E', function () {
		assert.equal(isNear(Math.LOG10E, 0.43429), true);
	});

	it('should have PI', function () {
		assert.equal(isNear(Math.PI, 3.14159), true);
	});

	it('should have SQRT1_2', function () {
		assert.equal(isNear(Math.SQRT1_2, 0.70710), true);
	});

	it('should have SQRT2', function () {
		assert.equal(isNear(Math.SQRT2, 1.41421), true);
	});

	it('should have abs()', function () {
		assert.equal(Math.abs(-1), 1);
	});

	it('should have acos()', function () {
		assert.equal(isNear(Math.acos(Math.SQRT1_2), Math.PI / 4), true);
	});

	it('should have asin()', function () {
		assert.equal(isNear(Math.asin(Math.SQRT1_2), Math.PI / 4), true);
	});

	it('should have atan()', function () {
		assert.equal(isNear(Math.atan(1), Math.PI / 4), true);
	});

	it('should have atan2()', function () {
		assert.equal(isNear(Math.atan2(-1, -1), -3 * Math.PI / 4), true);
	});

	it('should have atanh()', function () {
		assert.equal(isNear(Math.atanh(0.5), 0.54930), true);
	});

	it('should have acosh()', function () {
		assert.equal(isNear(Math.acosh(2), 1.31695), true);
	});

	it('should have asinh()', function () {
		assert.equal(isNear(Math.asinh(2), 1.44363), true);
	});

	it('should have cbrt()', function () {
		assert.equal(isNear(Math.cbrt(2), 1.25992), true);
	});

	it('should have ceil()', function () {
		assert.equal(Math.ceil(0.1), 1);
	});

	it('should have clz32()', function () {
		assert.equal(Math.clz32(1000), 22);
	});

	it('should have cos()', function () {
		assert.equal(isNear(Math.cos(1), 0.54030), true);
	});

	it('should have cosh()', function () {
		assert.equal(isNear(Math.cosh(1), 1.54308), true);
	});

	it('should have exp()', function () {
		assert.equal(isNear(Math.exp(2), Math.E * Math.E), true);
	});

	it('should have expm1()', function () {
		assert.equal(isNear(Math.expm1(2), Math.E * Math.E - 1), true);
	});

	it('should have floor()', function () {
		assert.equal(Math.floor(0.1), 0);
	});

	it('should have fround()', function () {
		assert.equal(isNear(Math.fround(0.51), 0.50999), true);
	});

	it('should have hypot()', function () {
		assert.equal(isNear(Math.hypot(1, 2, 3, 4, 5), 7.41619), true);
	});

	it('should have imul()', function () {
		assert.equal(Math.imul(0xffffffff, 5), -5);
	});

	it('should have log()', function () {
		assert.equal(isNear(Math.log(2), Math.LN2), true);
	});

	it('should have log1p()', function () {
		assert.equal(isNear(Math.log1p(1), Math.LN2), true);
	});

	it('should have log10()', function () {
		assert.equal(isNear(Math.log10(100), 2), true);
	});

	it('should have log2()', function () {
		assert.equal(isNear(Math.log2(1024), 10), true);
	});

	it('should have max()', function () {
		assert.equal(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 10);
	});

	it('should have min()', function () {
		assert.equal(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 1);
	});

	it('should have pow()', function () {
		assert.equal(Math.pow(1 / 4, 2), 1 / 16);
	});

	it('should have random()', function () {
		assert.equal(0 <= Math.random() && Math.random() < 1, true);
	});

	it('should have round()', function () {
		assert.equal(Math.round(1.5), 2);
	});

	it('should have sign()', function () {
		assert.equal(Math.sign(-100), -1);
	});

	it('should have sin()', function () {
		assert.equal(isNear(Math.sin(1), 0.84147), true);
	});

	it('should have sinh()', function () {
		assert.equal(isNear(Math.sinh(1), 1.17520), true);
	});

	it('should have sqrt()', function () {
		assert.equal(isNear(Math.sqrt(2), Math.SQRT2), true);
	});

	it('should have tan()', function () {
		assert.equal(isNear(Math.tan(1), 1.55740), true);
	});

	it('should have tanh()', function () {
		assert.equal(isNear(Math.tanh(1), 0.76159), true);
	});

	it('should have trunc()', function () {
		assert.equal(Math.trunc(-1.2345), -1);
	});

});

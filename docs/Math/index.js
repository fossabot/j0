(function(){
'use strict';

function clamp(x) {
	var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
	var H = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

	if (H < L) {
		var _ref = [H, L];
		L = _ref[0];
		H = _ref[1];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

describe('Math/clamp', function () {

	it('should return 1 if the arguments are [0, 1, 2]', function () {
		assert.equal(clamp(0, 1, 2), 1);
	});

	it('should return 2 if the arguments are [0, 2]', function () {
		assert.equal(clamp(0, 2), 2);
	});

	it('should return 2 if the arguments are [2, 1, 3]', function () {
		assert.equal(clamp(2, 1, 3), 2);
	});

	it('should return 2 if the arguments are [2, 3, 1]', function () {
		assert.equal(clamp(2, 3, 1), 2);
	});
});

function p(p1, p2, t) {
	return (1 - 3 * p2 + 3 * p1) * t * t * t + 3 * (p2 - 2 * p1) * t * t + 3 * p1 * t;
}

function cubicBezier(x1, y1, x2, y2, x) {
	function getT(lower, upper) {
		var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		var t = (lower + upper) / 2;
		if (8 < depth) {
			return t;
		} else if (p(x1, x2, t) < x) {
			// gotten x is lower than x
			return getT(t, upper, depth + 1);
		} else {
			// gotten x is larger than x
			return getT(lower, t, depth + 1);
		}
	}
	return p(y1, y2, getT(0, 1));
}

describe('Math/cubicBezier', function () {

	it('should be linear', function () {
		var sum = 0;
		for (var t = 0; t <= 1; t += 0.1) {
			var d = cubicBezier(0, 0, 1, 1, t) - t;
			sum += d * d;
		}
		assert.equal(sum < 0.0001, true);
	});
});
}())

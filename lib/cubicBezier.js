// var map = require('./map');
// var findIndex = require('./findIndex');
// var get = function (curve, targetX, lowerT, upperT, depth) {
// 	var t = (lowerT + upperT) / 2;
// 	var sample = curve(t);
// 	var x = sample[0];
// 	var y = sample[1];
// 	var d = x - targetX;
// 	depth = (depth || 0) + 1;
// 	if (0.00002 < d * d && depth < 4) {
// 		if (0 < d) {
// 			y = get(curve, targetX, lowerT, t, depth);
// 		} else {
// 			y = get(curve, targetX, t, upperT, depth);
// 		}
// 	}
// 	return y;
// };
// module.exports = function (x1, y1, x2, y2, x) {
// 	var curve = function (t) {
// 		var s = 1 - t;
// 		var c = 3 * t * s;
// 		var ttt = t * t * t;
// 		return [
// 			c * (s * x1 + t * x2) + ttt,
// 			c * (s * y1 + t * y2) + ttt
// 		];
// 	};
// 	var position;
// 	if (x === 0) {
// 		return 0;
// 	} else if (x === 1) {
// 		return 1;
// 	}
// 	position = findIndex(map([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], curve), function (sample) {
// 		return x < sample[0];
// 	});
// 	if (position < 0) {
// 		position = 0.9;
// 	} else {
// 		position = position / 10;
// 	}
// 	return get(curve, x, position, position + 0.1);
// };

// var Complex = require('./Complex');
// var getY = function (y1, y2, t) {
// 	return t.scale(3 * y1)
// 		.add(t.multiply(t).scale(3 * (y2 - 2 * y1)))
// 		.add(t.multiply(t).multiply(t).scale(1 - 3 * y2 + 3 * y1));
// };
// var isZero = function (x) {
// 	return -0.00001 < x && x < 0.00001;
// };
// module.exports = function (x1, y1, x2, y2, x) {
// 	var d = 1 - 3 * x2 + 3 * x1;
// 	var a = 3 * (x2 - 2 * x1) / d;
// 	var b = 3 * x1 / d;
// 	var c = -x / d;
// 	var p = (b - a * a / 3) / 3;
// 	var q = (c + a * a * a * 2 / 27 - a * b / 3) / 2;
// 	var r = Complex.sqrt(q * q + p * p * p);
// 	var A = Complex.real(-q).add(r).pow(1 / 3);
// 	var B = Complex.real(-q).subtract(r).pow(1 / 3);
// 	var C = Complex.real(a / -3);
// 	var t1 = A.add(B).add(C);
// 	var t2 = Complex.w2.multiply(A).add(Complex.w3.multiply(B)).add(C);
// 	var t3 = Complex.w3.multiply(A).add(Complex.w2.multiply(B)).add(C);
// 	var result1 = getY(y1, y2, t1);
// 	var result2 = getY(y1, y2, t2);
// 	var result3 = getY(y1, y2, t3);
// 	var result;
// 	if (isZero(result1.imaginary)) {
// 		result = result1;
// 	} else if (isZero(result2.imaginary)) {
// 		result = result2;
// 	} else {
// 		result = result3;
// 	}
// 	return result.real;
// };

module.exports = function (x1, y1, x2, y2, x) {
	var p = function (p1, p2, t) {
		return (1 - 3 * p2 + 3 * p1) * t * t * t + 3 * (p2 - 2 * p1) * t * t + 3 * p1 * t;
	};
	var getT = function (lower, upper, depth) {
		var t = (lower + upper) / 2;
		if (8 < depth) {
			return t;
		} else if (p(x1, x2, t) < x) {
			// gotten-x is lower than x
			return getT(t, upper, depth + 1);
		} else {
			// gotten-x is larger than x
			return getT(lower, t, depth + 1);
		}
	};
	var t = getT(0, 1, 0);
	return p(y1, y2, t);
};

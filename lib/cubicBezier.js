var map = require('./map');
var findIndex = require('./findIndex');
module.exports = function (x1, y1, x2, y2, x) {
	if (x === 0) {
		return 0;
	} else if (x === 1) {
		return 1;
	}
	var curve = function (t) {
		var s = 1 - t;
		var c = 3 * t * s;
		var ttt = t * t * t;
		return [
			c * (s * x1 + t * x2) + ttt,
			c * (s * y1 + t * y2) + ttt
		];
	};
	var position = findIndex(map([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], curve), function (sample) {
		return x < sample[0];
	});
	if (position < 0) {
		position = 0.9;
	} else {
		position = position / 10;
	}
	var get = function (targetX, lowerT, upperT, depth) {
		var t = (lowerT + upperT) / 2;
		var sample = curve(t);
		var x = sample[0];
		var y = sample[1];
		var d = x - targetX;
		depth = (depth || 0) + 1;
		if (0.00002 < d * d && depth < 4) {
			if (0 < d) {
				y = get(targetX, lowerT, t, depth);
			} else {
				y = get(targetX, t, upperT, depth);
			}
		}
		return y;
	};
	return get(x, position, position + 0.1);
};

var setTimeout = require('./setTimeout');
module.exports = function (fn, interval) {
	var args;
	var timer;
	var scheduled;
	var thisArg;
	var call = function () {
		args = arguments;
		thisArg = this;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = setTimeout(function () {
				timer = null;
				if (scheduled) {
					scheduled = null;
					call.apply(thisArg, args);
				}
			}, interval);
		}
	};
	return call;
};

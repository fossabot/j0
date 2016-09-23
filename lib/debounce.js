var setTimeout = require('./setTimeout');
var clearTimeout = require('./clearTimeout');
module.exports = function (fn, delay) {
	var args;
	var timer;
	var thisArg;
	return function () {
		args = arguments;
		thisArg = this;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(thisArg, args);
		}, delay);
	};
};

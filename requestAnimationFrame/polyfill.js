import {
	Date,
	window,
	setTimeout
} from 'j0';
window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (fn) {
		return setTimeout(function () {
			fn(Date.now());
		}, 30);
	};

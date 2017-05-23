import Date from '../Date';
import {
	window,
	setTimeout
} from '..';
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

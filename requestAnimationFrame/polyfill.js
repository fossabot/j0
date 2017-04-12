import window from '../window';
import Date from '../Date';
import setTimeout from '../setTimeout';
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (fn) {
	return setTimeout(function () {
		fn(Date.now());
	}, 30);
};

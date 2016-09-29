var window = require('./window');
var setInterval = require('./setInterval');
module.exports = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (fn) {
	return setInterval(function () {
		fn(window.Date.now());
	}, 30);
};

var window = require('./window');
var clearInterval = require('./clearInterval');
module.exports = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
	return clearInterval(id);
};

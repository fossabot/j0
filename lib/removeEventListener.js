var isArray = require('./isArray');
var forEach = require('./forEach');
var removeEventListener = module.exports = function (listeners) {
	var target = listeners[0];
	if (isArray(target)) {
		forEach(listeners, removeEventListener);
	} else if (target) {
		target.removeEventListener(listeners[1], listeners[2]);
	}
};

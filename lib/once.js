var addEventListener = require('./addEventListener');
var removeEventListener = require('./removeEventListener');
module.exports = function (element, eventName, fn) {
	var listeners = [
		addEventListener(element, eventName, fn),
		addEventListener(element, eventName, function () {
			removeEventListener(listeners);
		})
	];
	return listeners;
};

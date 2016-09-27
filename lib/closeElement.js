var removeElement = require('./removeElement');
var setTimeout = require('./setTimeout');
var addClass = require('./addClass');
var Promise = require('./Promise');
var isUndefined = require('./isUndefined');
var trigger = require('./trigger');

var S_CLOSE = 'close';
var S_CLOSEPROMISE = S_CLOSE + 'Promise';

module.exports = function (element, delay) {
	var promise;
	if (isUndefined(delay)) {
		delay = 300;
	}
	promise = element[S_CLOSEPROMISE];
	if (!promise) {
		promise = element[S_CLOSEPROMISE] = new Promise(function (resolve) {
			addClass(element, S_CLOSE);
			trigger(element, S_CLOSE);
			setTimeout(function () {
				removeElement(element);
				resolve(element);
			}, delay);
		});
	}
	return promise;
};

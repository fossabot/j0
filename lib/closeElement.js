var removeElement = require('./removeElement');
var setTimeout = require('./setTimeout');
var addClass = require('./addClass');
var Promise = require('./Promise');
var isUndefined = require('./isUndefined');
module.exports = function (element, delay) {
	if (isUndefined(delay)) {
		delay = 300;
	}
	return new Promise(function (resolve) {
		addClass(element, 'close');
		setTimeout(function () {
			removeElement(element);
			resolve(element);
		}, delay);
	});
};

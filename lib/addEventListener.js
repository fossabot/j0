var trim = require('./trim');
var map = require('./map');
var concat = require('./concat');
var addClass = require('./addClass');
var removeClass = require('./removeClass');
var userAgent = require('./userAgent');

var S_HOVER = 'hover';
var S_ADDEVENTLISTENER = 'addEventListener';

module.exports = function (object, eventNames, fn) {
	var options = {};
	return map(trim(eventNames).split(/\s+/), function (eventName) {
		var listener;
		object[S_ADDEVENTLISTENER](eventName, fn);
		listener = [object, eventName, fn];
		switch (eventName) {
			case 'input':
				if (userAgent.ie) {
					listener = concat([listener], map([
						['keyup', fn]
					], function (item) {
						object[S_ADDEVENTLISTENER](item[0], item[1]);
						return [object, item[0], item[1]];
					}));
				}
				break;
			case 'click':
				if (!options[S_HOVER]) {
					options[S_HOVER] = true;
					listener = concat([listener], map([
						['mouseenter', function () {
							addClass(this, S_HOVER);
						}],
						['mouseleave', function () {
							removeClass(this, S_HOVER);
						}]
					], function (item) {
						object[S_ADDEVENTLISTENER](item[0], item[1]);
						return [object, item[0], item[1]];
					}));
				}
				break;
		}
		return listener;
	});
};

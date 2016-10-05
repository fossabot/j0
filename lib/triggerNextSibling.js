var trigger = require('./trigger');
var nextSibling = require('./nextSibling');
var eventTargetElement = require('./eventTargetElement');
module.exports = function (event) {
	trigger(nextSibling(eventTargetElement(event)), event.type, event.detail);
};

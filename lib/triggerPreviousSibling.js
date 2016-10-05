var trigger = require('./trigger');
var previousSibling = require('./previousSibling');
var eventTargetElement = require('./eventTargetElement');
module.exports = function (event) {
	trigger(previousSibling(eventTargetElement(event)), event.type, event.detail);
};

module.exports = function (event) {
	if (event.touches) {
		event = event.changedTouches.item(0) || event.touches.item(0);
	}
	return event.target || event.srcElement;
};

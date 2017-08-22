function callMethod(event) {
	this[event.type](event);
}

export default callMethod;

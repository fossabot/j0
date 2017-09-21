function callMethod(event) {
	return this[event.type](event);
}

export default callMethod;

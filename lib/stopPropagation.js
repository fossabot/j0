module.exports = function (event) {
	return event && event.stopPropagation && event.stopPropagation();
};

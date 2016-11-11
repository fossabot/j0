module.exports = function (element) {
	var tag = element && element.tagName;
	return tag ? tag.toLowerCase() : '';
};

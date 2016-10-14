module.exports = function (element) {
	var tag = element.tagName;
	return tag ? tag.toLowerCase() : '';
};

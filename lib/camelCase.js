module.exports = function (text) {
	return text.replace(/[^a-zA-Z0-9]([a-zA-Z0-9])/g, function (match, character) {
		return character.toUpperCase();
	});
};

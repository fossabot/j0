module.exports = function (source) {
	return source
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
};

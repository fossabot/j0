module.exports = Number.isNaN || function (x) {
	return typeof x === 'number' && isNaN(x);
};

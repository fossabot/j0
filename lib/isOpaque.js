module.exports = function (x) {
	var result = true;
	x.replace(/^\s*rgba\((?:\s*\d*\s*,){3}\s*(\d*\.?\d*)\s*\)\s*$/, function (match, opacity) {
		result = 1 <= parseFloat(opacity);
	});
	return result;
};

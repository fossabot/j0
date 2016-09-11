module.exports = (fn) => {
	return new Promise((resolve) => {
		fn((error, result) => {
			if (error) {
				throw error;
			} else {
				resolve(result);
			}
		});
	});
};

var counter = 0;
module.exports = function () {
	return '_' + (counter++).toString(16);
};

var JSON = require('./JSON');
module.exports = function (x, replacer) {
	return JSON.parse(JSON.stringify(x, replacer));
};

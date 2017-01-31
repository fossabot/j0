var slice = require('../lib/slice');

module.exports = function (declaration) {
	return declaration[0] + ':' + slice(declaration, 1).join(' ');
};

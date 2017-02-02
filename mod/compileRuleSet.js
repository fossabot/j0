var map = require('../lib/map');
var compileCSSDeclaration = require('./compileCSSDeclaration');
module.exports = function (args) {
	var i = args.length;
	var result = map(args[--i], compileCSSDeclaration).join(';');
	result = args[--i] + '{' + result + '}';
	while (0 < i--) {
		result = args[i] + '{' + result + '}';
	}
	return result;
};

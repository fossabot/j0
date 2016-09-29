var map = require('./map');
var concat = require('./concat');
var find = require('./find');
var list = concat.apply(null, map([
	['image', [
		['jpeg', ['jpg', 'jpeg']],
		['png'],
		['svg'],
		['gif'],
		['bmp']
	]],
	['text', [
		['plain', ['txt', 'log']],
		['csv'],
		['css']
	]],
	['application', [
		['json'],
		['javascript', ['js']]
	]]
], function (group) {
	var groupName = group[0];
	return concat.apply(null, map(group[1], function (type) {
		var exts = type[1];
		if (!exts) {
			exts = [type[0]];
		}
		type = type[0];
		return map(exts, function (ext) {
			return [ext, groupName + '/' + type];
		});
	}));
}));

module.exports = function (x) {
	var ext = x.replace(/^.*[\.\/](\w+?)$/, '$1').toLowerCase();
	x = find(list, function (item) {
		return item[0] === ext;
	});
	return x && x[1];
};

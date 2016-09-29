var map = require('./map');
var join = require('./join');
var encodeURIComponent = require('./encodeURIComponent');
module.exports = function (params) {
	return join(map(params, function (item) {
		return encodeURIComponent(item[0]) + '=' + encodeURIComponent(item[1]);
	}), '&');
};

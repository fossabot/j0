describe('forEachKey', function () {

	var assert = require('assert');
	var forEachKey = require('../lib/forEachKey');

	it('should iterate', function () {
		var result = '';
		var data = {
			a: 'b',
			c: 'd'
		};
		forEachKey(data, function (value, key, object) {
			result += object === data && (key + value);
		});
		assert.equal(result, 'abcd');
	});

});

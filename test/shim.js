describe('shim', function () {

	var assert = require('assert');
	var shim = require('../lib/shim');

	it('should add shim', function () {
		var obj = {};
		shim(obj, 'Ranked Battle', 'Rainmaker');
		assert.equal(obj['Ranked Battle'], 'Rainmaker');
	});

	it('should keep exist property', function () {
		var obj = {
			'Ranked Battle': 'Splat Zones'
		};
		shim(obj, 'Ranked Battle', 'Rainmaker');
		assert.equal(obj['Ranked Battle'], 'Splat Zones');
	});

});

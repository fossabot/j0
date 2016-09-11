describe('isOpaque', function () {

	var assert = require('assert');
	var isOpaque = require('../lib/isOpaque');

	var test = function (testee, expected) {
		it('should judge ' + testee + (expected ? '' : ' not') + ' to be opaque', function () {
			assert.equal(isOpaque(testee), expected);
		});
	};

	test(' rgba( 1.1 , 1 , 1 , 0 ) ', true);
	test(' rgba( 1 , 1 , 1 , 0 ) ', false);
	test('rgba(1,1,1,0.5)', false);
	test('rgb(255, 0, 0)', true);
	test('rgba(1,1,1,1)', true);
	test(' rgba( 1 , 1 , 1 , 3.1415926 ) ', true);

});

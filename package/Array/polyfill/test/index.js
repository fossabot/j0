import Array from '../..';

describe('Array/polyfill', function () {

	it('should have from', function () {
		assert.deepEqual(Array.from('abc'), ['a', 'b', 'c']);
	});

});

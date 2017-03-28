import Set from '../..';

describe('Set', function () {

	it('should create a Set', function () {
		assert.doesNotThrow(function () {
			const set = new Set();
			return set;
		});
	});

});

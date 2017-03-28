import Map from '../..';

describe('Map', function () {

	it('should create a map', function () {
		assert.doesNotThrow(function () {
			const map = new Map();
			return map;
		});
	});

});

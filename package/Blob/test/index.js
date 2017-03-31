import Blob from '..';

describe('Blob', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new Blob(['data']);
		});
	});

});

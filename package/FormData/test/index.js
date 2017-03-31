import FormData from '..';

describe('FormData', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new FormData();
		});
	});

});

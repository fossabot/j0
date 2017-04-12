import scrollBy from '..';

describe('scrollBy', function () {

	it('should receive two numbers', function () {
		assert.doesNotThrow(function () {
			scrollBy(1, 1);
		});
	});

});

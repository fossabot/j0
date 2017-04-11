import scrollTo from '..';

describe('scrollTo', function () {

	it('should receive two numbers', function () {
		assert.doesNotThrow(function () {
			scrollTo(1, 1);
		});
	});

});

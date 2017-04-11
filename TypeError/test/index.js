import TypeError from '..';

describe('TypeError', function () {

	it('should have message', function () {
		const message = 'abc';
		const error = new TypeError(message);
		assert.equal(error.message, message);
	});

});

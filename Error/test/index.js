import Error from '..';

describe('Error', function () {

	it('should have message', function () {
		const message = 'abc';
		const error = new Error(message);
		assert.equal(error.message, message);
	});

});

import passThrough from '../index.js';

describe('passThrough', function () {

	it('should return the first argument', function () {
		const value = Date.now();
		assert.equal(passThrough(value), value);
	});

});

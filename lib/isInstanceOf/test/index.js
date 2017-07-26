import isInstanceOf from '../index.js';

describe('isInstanceOf', function () {

	it('should return true if the first argument is an instance of the last argument', function () {
		class A {}
		const a = new A();
		assert.equal(isInstanceOf(a, A), true);
	});

	it('should return false if the first argument is not an instance of the last argument', function () {
		class A {}
		const a = 0;
		assert.equal(isInstanceOf(a, A), false);
	});

});

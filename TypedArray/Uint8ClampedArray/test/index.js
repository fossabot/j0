import Uint8ClampedArray from '..';
describe('Uint8ClampedArray', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Uint8ClampedArray(1);
		});
	});

});

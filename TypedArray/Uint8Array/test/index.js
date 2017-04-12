import Uint8Array from '..';
describe('Uint8Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Uint8Array(1);
		});
	});

});

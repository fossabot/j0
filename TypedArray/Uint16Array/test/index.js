import Uint16Array from '..';
describe('Uint16Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Uint16Array(1);
		});
	});

});

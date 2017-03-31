import Int32Array from '..';
describe('Int32Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Int32Array(1);
		});
	});

});

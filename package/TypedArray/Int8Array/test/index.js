import Int8Array from '..';
describe('Int8Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Int8Array(1);
		});
	});

});

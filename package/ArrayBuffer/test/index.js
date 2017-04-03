import '../*/test';
import ArrayBuffer from '..';
describe('ArrayBuffer', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new ArrayBuffer(1);
		});
	});

});

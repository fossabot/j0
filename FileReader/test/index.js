import FileReader from '..';

describe('FileReader', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new FileReader();
		});
	});

});

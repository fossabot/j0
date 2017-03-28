import CustomEvent from '..';

describe('CustomEvent', function () {

	it('should be a constructor or null', function () {
		if (CustomEvent) {
			assert.doesNotThrow(function () {
				return new CustomEvent('G');
			});
		} else {
			assert.equal(CustomEvent, null);
		}
	});

});

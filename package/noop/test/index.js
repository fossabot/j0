import noop from '..';
import Date from '../../Date';

describe('noop', function () {

	it('should be callable', function () {
		assert.doesNotThrow(function () {
			noop();
		});
	});

	it('should return the first argument', function () {
		const data = new Date();
		assert.equal(noop(data), data);
	});

});

import document from '..';
import isFunction from '../../isFunction';

describe('document', function () {

	it('should have document.createElement', function () {
		assert.equal(isFunction(document.createElement), true);
	});

});

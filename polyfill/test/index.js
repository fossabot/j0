import {window} from 'j0';

describe('polyfill', function () {

	it('should add global', function () {
		assert.equal(window.global, window);
	});

});

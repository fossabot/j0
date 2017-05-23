import {window} from '../..';

describe('polyfill', function () {

	it('should add global', function () {
		assert.equal(window.global, window);
	});

});

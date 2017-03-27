import window from '../../window';

describe('polyfill', function () {

	it('should add global', function () {
		assert.equal(window.global, window);
	});

});

import getEncoding from '..';

describe('getEncoding', function () {

	it('should have UTF8 as default', function () {
		assert.equal(Boolean(getEncoding('utf-8')), true);
	});

});

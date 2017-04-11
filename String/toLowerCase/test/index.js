import toLowerCase from '..';

describe('toLowerCase', function () {

	it('should convert cases', function () {
		assert.equal(toLowerCase('ABc'), 'abc');
	});

});

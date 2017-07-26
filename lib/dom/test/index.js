import './*/index.js';
import dom from '..';

describe('dom (J0Element)', function () {

	it('should create a new J0Element', function () {
		assert.equal('node' in dom(), true);
	});

});

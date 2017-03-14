import equal from '../../../assert/equal';
import noopTrue from '..';

describe('noop', function () {

	it('should return true', function () {
		equal(noopTrue(false), true);
	});

});

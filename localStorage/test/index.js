import localStorage from '..';
import Date from '../../Date';

const key = Date.now();

describe('localStorage', function () {

	it('should be writable/readable', function () {
		localStorage[key] = key;
		assert.equal(localStorage[key], key);
	});

	it('should remove data', function () {
		localStorage.removeItem(key);
		assert.equal(localStorage[key], {}[key]);
	});

});

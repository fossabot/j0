import Date from '../../Date';
import wait from '..';
describe('wait', function () {
	it('should return a promise', function () {
		const start = Date.now();
		return wait(100)
		.then(function () {
			assert.equal(80 < (Date.now() - start), true);
		});
	});
});

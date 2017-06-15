import wait from '..';
describe('wait', function () {
	it('should return a promise and it should resolved with given data', async function () {
		const start = Date.now();
		const data = start;
		const duration = 100;
		const margin = 0.8;
		const actual = await wait(duration, data);
		assert.equal(actual, data);
		assert.equal(margin * duration < (Date.now() - start), true);
	});
});

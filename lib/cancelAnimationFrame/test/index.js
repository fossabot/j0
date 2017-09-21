import {
	cancelAnimationFrame,
	requestAnimationFrame,
	Promise,
	setTimeout,
} from 'j0';

describe('cancelAnimationFrame', function () {

	it('should cancel scheduled invocation', async function () {
		const baseInterval = await new Promise((resolve) => {
			requestAnimationFrame((time1) => {
				requestAnimationFrame((time2) => {
					resolve(time2 - time1);
				});
			});
		});
		const timeoutMargin = 50;
		this.timeout(Math.max(10000, baseInterval * timeoutMargin));
		assert.equal(0 < baseInterval, true);
		await new Promise((resolve) => {
			requestAnimationFrame(resolve);
		});
		await new Promise((resolve, reject) => {
			setTimeout(resolve, baseInterval * timeoutMargin / 2);
			const id = requestAnimationFrame(reject);
			cancelAnimationFrame(id);
		});
	});

});

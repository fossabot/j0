import {
	cancelAnimationFrame,
	requestAnimationFrame
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
		this.timeout(timeoutMargin * baseInterval);
		assert.equal(0 < baseInterval, true);
		await new Promise((resolve, reject) => {
			const margin = 10;
			const timer = setTimeout(() => {
				reject(new Error('requestAnimationFrame didn\'t invoke the given function.'));
			}, baseInterval * margin);
			requestAnimationFrame(() => {
				clearTimeout(timer);
				resolve();
			});
		});
		await new Promise((resolve, reject) => {
			const margin = 10;
			const timer = setTimeout(resolve, baseInterval * margin);
			const id = requestAnimationFrame(() => {
				clearTimeout(timer);
				reject(new Error('cancelAnimationFrame didn\'t cancel the invocation.'));
			});
			cancelAnimationFrame(id);
		});
	});

});

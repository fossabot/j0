import {
	debounce,
	Promise,
} from 'j0';

describe('debounce', function () {

	this.timeout(5000);

	it('should call the function after the last call', async () => {
		const result = await new Promise((resolve) => {
			const execute = debounce((value) => {
				resolve(value);
			}, 100);
			execute(1);
			execute(2);
			execute(3);
		});
		assert.equal(result, 3);
	});

	it('should call the function with its context', async () => {
		const result = await new Promise((resolve) => {
			const execute = debounce(function () {
				resolve(this);
			}, 100);
			execute.call(1);
			execute.call(2);
			execute.call(3);
		});
		assert.equal(result, 3);
	});

});

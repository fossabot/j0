import debounce from '../index.js';

describe('debounce', function () {

	it('should call the function after the last call', () => {
		return new Promise((resolve) => {
			const execute = debounce((value) => {
				resolve(value);
			}, 50);
			execute(1);
			execute(2);
			execute(3);
		}).then((result) => {
			assert.equal(result, 3);
		});
	});

	it('should call the function with its context', () => {
		return new Promise((resolve) => {
			const execute = debounce(function (value) {
				resolve(this);
			}, 50);
			execute.call(1);
			execute.call(2);
			execute.call(3);
		}).then((result) => {
			assert.equal(result, 3);
		});
	});

});

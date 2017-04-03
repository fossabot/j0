import debounce from '..';

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

});

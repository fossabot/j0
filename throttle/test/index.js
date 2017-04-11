import throttle from '..';

describe('throttle', function () {

	it('should call the function intermittently', () => {
		return new Promise((resolve) => {
			let count = 0;
			const execute = throttle((value) => {
				count += value;
				if (1 < count) {
					resolve(count);
				}
			}, 50);
			execute(1);
			execute(2);
			execute(3);
			execute(4);
			execute(5);
		}).then((result) => {
			assert.equal(result, 6);
		});
	});

});

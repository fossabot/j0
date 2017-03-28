import Promise from '../../Promise';
import clearTimeout from '..';
import setTimeout from '../../setTimeout';

const WAIT = 100;

describe('clearTimeout', function () {

	it('should cancel calling', function () {
		let count = 0;
		return new Promise((resolve) => {
			const timer = setTimeout(function () {
				count += 1;
			});
			clearTimeout(timer);
			setTimeout(resolve, WAIT);
		})
		.then(() => {
			assert.equal(count, 0);
		});
	});

});

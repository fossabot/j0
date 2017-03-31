import generator from '..';

describe('Array/@iterator', function () {

	it('should return an iterator', function () {
		const array = [1, 2, 3];
		const iterator = generator.call(array);
		const results = [];
		let index = 0;
		while (1) {
			const {value, done} = iterator.next();
			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, array);
	});

});

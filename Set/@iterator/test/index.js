import generator from '..';
import Set from '../..';

describe('Set/@iterator', function () {

	it('should return an iterator', function () {
		const data = [1, 2];
		const map = new Set(data);
		const iterator = generator.call(map);
		const results = [];
		let index = 0;
		while (1) {
			const {value, done} = iterator.next();
			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, data);
	});

});

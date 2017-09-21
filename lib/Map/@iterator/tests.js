import {
	Map,
} from 'j0';

/* eslint-disable no-constant-condition */
function test(generator, name = 'Map.prototype[Symbol.iterator]') {

	describe(name, function () {

		it(name, function () {
			const data = [
				[1, 2],
				[3, 4]
			];
			const map = new Map(data);
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

}

export default test;

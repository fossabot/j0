/* eslint-disable no-constant-condition */
function test(entries, name = 'Array.prototype.entries') {

	describe(name, function () {

		it('should return an iterator', function () {
			const array = [
				Math.random(),
				Math.random(),
				Math.random()
			];
			const iterator = entries.call(array);
			const results = [];
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results.push(value);
			}
			const expected = array.map((value, index) => {
				return [index, value];
			});
			assert.deepEqual(results, expected);
		});

	});

}

export default test;

/* eslint-disable no-constant-condition */
function test(generator, name = 'String.prototype[Symbol.iterator]') {

	describe(name, function () {

		it('should return an iterator', function () {
			const string = `${Date.now()}`;
			const iterator = generator.call(string);
			const results = [];
			let index = 0;
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, string.split(''));
		});

		it('should return an iterator which is iterable in for-of syntax', function () {
			const string = `${Date.now()}`;
			const iterator = generator.call(string);
			const results = [];
			for (const value of iterator) {
				results.push(value);
			}
			assert.deepEqual(results, string.split(''));
		});

	});

}

export default test;

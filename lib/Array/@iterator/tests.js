function test(generator, name = 'Array.prototype[Symbol.iterator]') {

	describe(name, function () {

		it('should return an iterator', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
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

		it('should return an iterator which is iterable in for-of syntax', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			const iterator = generator.call(array);
			const results = [];
			for (const value of iterator) {
				results.push(value);
			}
			assert.deepEqual(results, array);
		});

	});

}

export default test;

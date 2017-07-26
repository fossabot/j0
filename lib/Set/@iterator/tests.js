function test(generator, name = 'Set.prototype[Symbol.iterator]') {

	describe(name, function () {

		it('should return an iterator', function () {
			const data = [1, 2];
			const set = new Set(data);
			const iterator = generator.call(set);
			const results = [];
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, data);
		});

	});

}

export default test;

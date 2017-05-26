function test(generator, name = 'NamedNodeMap.prototype[Symbol.iterator]') {

	describe(name, function () {

		it('should create an iterator', function () {
			const parent = document.createElement('div');
			const expected = [
				document.createElement('div'),
				document.createElement('div')
			];
			for (const element of expected) {
				parent.appendChild(element);
			}
			const iterator = generator.call(parent.childNodes);
			const results = [];
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, expected);
		});

		it('should create an iterator which is iterable in for-of syntax', function () {
			const parent = document.createElement('div');
			const expected = [
				document.createElement('div'),
				document.createElement('div')
			];
			for (const element of expected) {
				parent.appendChild(element);
			}
			const iterator = generator.call(parent.childNodes);
			const results = [];
			for (const value of iterator) {
				results.push(value);
			}
			assert.deepEqual(results, expected);
		});

	});

}

export default test;

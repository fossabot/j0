import generator from '..';

describe('NamedNodeMap/@iterator', function () {

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
		let index = 0;
		while (1) {
			const {value, done} = iterator.next();
			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, expected);
	});

});

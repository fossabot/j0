import generator from '..';
import createElement from '../../../dom/createElement';
import childNodes from '../../../dom/childNodes';

describe('HTMLCollection/@iterator', function () {

	it('should create an iterator', function () {
		const expected = [createElement(), createElement()];
		const parent = createElement({c: expected});
		const iterator = generator.call(childNodes(parent));
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

import getElementsByClassName from '..';
import createElement from '../../createElement';
import appendChild from '../../appendChild';
import arrayFrom from '../../../Array/from';

describe('getElementsByClassName', function () {

	it('should return a live list of elements', function () {
		const className = 'abc';
		const data = {
			a: [
				['class', className]
			]
		};
		const c1 = createElement(data);
		const c2 = createElement(data);
		const parent = createElement({c: [c1]});
		const list = getElementsByClassName(className, parent);
		appendChild(parent, c2);
		assert.deepEqual(arrayFrom(list), [c1, c2]);
	});

});

import querySelectorAll from '../../querySelectorAll';
import createElement from '../../createElement';
import map from '../../../Array/map';

describe('dom/querySelectorAll', function () {

	it('should get elements', function () {
		const className = 'abc';
		const child1 = createElement({
			a: [
				['class', className]
			]
		});
		const child2 = createElement({
			a: [
				['class', className]
			]
		});
		const parent = createElement({
			c: [
				{c: [child1]},
				child2
			]
		});
		assert.deepEqual(
			map(querySelectorAll(parent, `.${className}`)),
			[child1, child2]
		);
	});

});

import getElementById from '..';
import createElement from '../../createElement';

describe('getElementById', function () {

	it('should return an element', function () {
		const id = 'abc';
		const data = {
			a: [
				['id', id]
			]
		};
		const c1 = createElement(data);
		const c2 = createElement(data);
		const parent = createElement({c: [c1, c2]});
		const element = getElementById(id, parent);
		assert.equal(element, c1);
	});

});

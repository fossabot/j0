import querySelector from '../../querySelector';
import createElement from '../../createElement';

describe('dom/querySelector', function () {

	it('should get an element', function () {
		const className = 'abc';
		const child = createElement({
			a: [
				['class', className]
			]
		});
		const parent = createElement({
			c: [
				{c: [child]}
			]
		});
		assert.equal(querySelector(parent, `.${className}`), child);
	});

});

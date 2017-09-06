import {
	N,
} from 'j0';

describe('N.prototype.find', function () {

	it('should return the first matched element', function () {
		const className = `c${Date.now()}`;
		const element1 = new N({
			a: [
				['class', className]
			]
		});
		const element2 = new N({
			a: [
				['class', className]
			]
		});
		const element3 = new N({
			a: [
				['class', className]
			]
		});
		const element = new N({
			c: [
				element2,
				{
					c: [
						element3
					]
				}
			]
		});
		new N({
			c: [
				element1,
				element
			]
		});
		const actual = element.find(`.${className}`);
		const expected = element2;
		assert.equal(actual.equals(expected), true);
	});

});

describe('N.prototype.findAll', function () {

	it('should return an array of matched elements', function () {
		const className = `c${Date.now()}`;
		const element1 = new N({
			a: [
				['class', className]
			]
		});
		const element2 = new N({
			a: [
				['class', className]
			]
		});
		const element3 = new N({
			a: [
				['class', className]
			]
		});
		const element = new N({
			c: [
				element2,
				{
					c: [
						element3
					]
				}
			]
		});
		new N({
			c: [
				element1,
				element
			]
		});
		const actual = element.findAll(`.${className}`);
		const expected = [element2, element3];
		actual
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

});

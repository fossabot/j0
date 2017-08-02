import dom from '../../index.js';

describe('J0Element.prototype.find', function () {

	it('should return the first matched element', function () {
		const className = `c${Date.now()}`;
		const element1 = dom({
			a: [
				['class', className]
			]
		});
		const element2 = dom({
			a: [
				['class', className]
			]
		});
		const element3 = dom({
			a: [
				['class', className]
			]
		});
		const element = dom({
			c: [
				element2,
				{
					c: [
						element3
					]
				}
			]
		});
		dom({
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

describe('J0Element.prototype.findAll', function () {

	it('should return an array of matched elements', function () {
		const className = `c${Date.now()}`;
		const element1 = dom({
			a: [
				['class', className]
			]
		});
		const element2 = dom({
			a: [
				['class', className]
			]
		});
		const element3 = dom({
			a: [
				['class', className]
			]
		});
		const element = dom({
			c: [
				element2,
				{
					c: [
						element3
					]
				}
			]
		});
		dom({
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

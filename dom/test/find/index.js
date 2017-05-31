import dom from '../..';

describe('J0Element.prototype.find', function () {

	it('should return the first matched elements', function () {
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
		assert.deepEqual(element.find(`.${className}`), element2);
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
		assert.deepEqual(element.findAll(`.${className}`), [element2, element3]);
	});

});

import {
	dom
} from 'j0';

describe('J0Element.prototype.replaceChild', function () {

	it('should replace a node', function () {
		const element1 = dom();
		const element2 = dom();
		const element = dom({
			c: [
				element1
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.replaceChild(element2, element1);
		const expected = [
			element2
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

});

describe('J0Element.prototype.replaceWith', function () {

	it('should replace node with some nodes', function () {
		const element1 = dom();
		const element2 = dom();
		const element3 = dom();
		const element4 = dom();
		const element5 = dom();
		const element = dom({
			c: [
				element1,
				element2,
				element3
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element2.replaceWith(element4, element5);
		const expected = [
			element1,
			element4,
			element5,
			element3
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

});

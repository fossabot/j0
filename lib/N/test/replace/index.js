import {
	N
} from 'j0';

describe('N.prototype.replaceChild', function () {

	it('should replace a node', function () {
		const element1 = new N();
		const element2 = new N();
		const element = new N({
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

describe('N.prototype.replaceWith', function () {

	it('should replace node with some nodes', function () {
		const element1 = new N();
		const element2 = new N();
		const element3 = new N();
		const element4 = new N();
		const element5 = new N();
		const element = new N({
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

import dom from '../../index.js';

describe('J0Element.prototype.next', function () {

	it('should insert a new node before an existing node', function () {
		const element1 = dom();
		const element2 = dom();
		const element = dom({
			c: [
				element1
			]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		const expected = [
			element1,
			element2
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should insert 2 new nodes before an existing node', function () {
		const element1 = dom();
		const element2 = dom();
		const element3 = dom();
		const element = dom({
			c: [
				element1
			]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2, element3);
		const expected = [
			element1,
			element2,
			element3
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace an existing node', function () {
		const element1 = dom();
		const element2 = dom();
		const element = dom({
			c: [
				element2,
				element1
			]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		const expected = [
			element1,
			element2
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace existing nodes', function () {
		const element1 = dom();
		const element2 = dom();
		const element3 = dom();
		const element = dom({
			c: [
				element3,
				element2,
				element1
			]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2, element3);
		const expected = [
			element1,
			element2,
			element3
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should return null', function () {
		const element1 = dom();
		const element2 = dom();
		dom({
			c: [
				element1,
				element2
			]
		});
		assert.equal(element2.next, null);
	});

});

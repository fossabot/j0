import {
	N
} from 'j0';

describe('N.prototype.previous', function () {

	it('should insert a new node before an existing node', function () {
		const element1 = new N();
		const element2 = new N();
		const element = new N({
			c: [
				element1
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2);
		const expected = [
			element2,
			element1
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should insert 2 new nodes before an existing node', function () {
		const element1 = new N();
		const element2 = new N();
		const element3 = new N();
		const element = new N({
			c: [
				element1
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2, element3);
		const expected = [
			element2,
			element3,
			element1
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace an existing node', function () {
		const element1 = new N();
		const element2 = new N();
		const element = new N({
			c: [
				element1,
				element2
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2);
		const expected = [
			element2,
			element1
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace existing nodes', function () {
		const element1 = new N();
		const element2 = new N();
		const element3 = new N();
		const element = new N({
			c: [
				element3,
				element1,
				element2
			]
		});
		assert.equal(element.firstChild.equals(element3), true);
		element1.setPrevious(element2, element3);
		const expected = [
			element2,
			element3,
			element1
		];
		element.childNodes
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should return null', function () {
		const element1 = new N();
		const element2 = new N();
		new N({
			c: [
				element1,
				element2
			]
		});
		assert.equal(element1.previous, null);
	});

});

import {
	N,
	Node,
} from 'j0';

describe('N.prototype.nodeType', function () {

	it('should return ELEMENT_NODE', function () {
		const element = new N({});
		assert.equal(element.nodeType, Node.ELEMENT_NODE);
	});

	it('should return TEXT_NODE', function () {
		const element = new N(`${Date.now()}`);
		assert.equal(element.nodeType, Node.TEXT_NODE);
	});

});

describe('N.prototype.isElementNode', function () {

	it('should return true', function () {
		const element = new N({});
		assert.equal(element.isElementNode, true);
	});

	it('should return false', function () {
		const element = new N(`${Date.now()}`);
		assert.equal(element.isElementNode, false);
	});

});

describe('N.prototype.isTextNode', function () {

	it('should return false', function () {
		const element = new N({});
		assert.equal(element.isTextNode, false);
	});

	it('should return true', function () {
		const element = new N(`${Date.now()}`);
		assert.equal(element.isTextNode, true);
	});

});

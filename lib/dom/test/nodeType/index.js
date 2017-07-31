import dom from '../../index.js';

describe('J0Element.prototype.nodeType', function () {

	it('should return ELEMENT_NODE', function () {
		const element = dom({});
		assert.equal(element.nodeType, Node.ELEMENT_NODE);
	});

	it('should return TEXT_NODE', function () {
		const element = dom(`${Date.now()}`);
		assert.equal(element.nodeType, Node.TEXT_NODE);
	});

});

describe('J0Element.prototype.isElementNode', function () {

	it('should return true', function () {
		const element = dom({});
		assert.equal(element.isElementNode, true);
	});

	it('should return false', function () {
		const element = dom(`${Date.now()}`);
		assert.equal(element.isElementNode, false);
	});

});

describe('J0Element.prototype.isTextNode', function () {

	it('should return false', function () {
		const element = dom({});
		assert.equal(element.isTextNode, false);
	});

	it('should return true', function () {
		const element = dom(`${Date.now()}`);
		assert.equal(element.isTextNode, true);
	});

});

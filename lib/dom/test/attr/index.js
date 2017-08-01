import dom from '../../index.js';

describe('J0Element.prototype.attr', function () {

	it('should set an attribute', function () {
		const element = dom();
		const key = `attr-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key), null);
		element.setAttribute(key, value1, value2);
		assert.equal(element.getAttribute(key), `${value1} ${value2}`);
	});

	it('should set a "data-" prefixed attribute', function () {
		const element = dom();
		const key = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key), null);
		element.setAttribute(key, value1, value2);
		assert.equal(element.getAttribute(key), `${value1} ${value2}`);
	});

});

import {
	dom
} from 'j0';

describe('J0Element.prototype.attributes', function () {

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

	it('should return a map of attributes', function () {
		const key1 = `attr-${Date.now()}`;
		const key2 = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		const element = dom({
			a: [
				[key1, value2],
				[key1, value1],
				[key2, value2]
			]
		});
		assert.deepEqual(Array.from(element.attributes), [
			[key1, value1],
			[key2, value2]
		]);
	});

});

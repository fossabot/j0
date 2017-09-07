import {
	N,
} from 'j0';

describe('N.prototype.attributes', function () {

	it('should set an attribute', function () {
		const element = new N();
		const key = `attr-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key), null);
		assert.equal(element.setAttribute(key, value1, value2), element);
		assert.equal(element.getAttribute(key), `${value1} ${value2}`);
	});

	it('should set a "data-" prefixed attribute', function () {
		const element = new N();
		const key = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key), null);
		assert.equal(element.setAttribute(key, value1, value2), element);
		assert.equal(element.getAttribute(key), `${value1} ${value2}`);
	});

	it('should remove attributes', function () {
		const element = new N();
		const key1 = `attr-${Date.now()}`;
		const key2 = `attr-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		assert.equal(element.setAttribute(key1, value1, value2), element);
		assert.equal(element.setAttribute(key2, value2, value1), element);
		assert.equal(element.getAttribute(key1), `${value1} ${value2}`);
		assert.equal(element.getAttribute(key2), `${value2} ${value1}`);
		assert.equal(element.removeAttribute(key1, key2), element);
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
	});

	it('should remove a "data-" prefixed attribute', function () {
		const element = new N();
		const key1 = `data-${Date.now()}`;
		const key2 = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		assert.equal(element.setAttribute(key1, value1, value2), element);
		assert.equal(element.setAttribute(key2, value2, value1), element);
		assert.equal(element.getAttribute(key1), `${value1} ${value2}`);
		assert.equal(element.getAttribute(key2), `${value2} ${value1}`);
		assert.equal(element.removeAttribute(key1, key2), element);
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
	});

	it('should return a map of attributes', function () {
		const key1 = `attr-${Date.now()}`;
		const key2 = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		const element = new N({
			a: [
				[key1, value2],
				[key1, value1],
				[key2, value2]
			]
		});
		assert.deepEqual(
			Array.from(element.attributes)
			.sort(([a], [b]) => {
				return a < b ? -1 : 1;
			}),
			[
				[key1, value1],
				[key2, value2]
			]
			.sort(([a], [b]) => {
				return a < b ? -1 : 1;
			})
		);
	});

});

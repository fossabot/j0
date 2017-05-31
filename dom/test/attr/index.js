import dom from '../..';

describe('J0Element.prototype.attr', function () {

	it('should set an attribute', function () {
		const element = dom();
		const key = `attr-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key), null);
		element.attr(key, value1, value2);
		assert.equal(element.getAttribute(key), `${value1} ${value2}`);
	});

	it('should set a "data-" prefixed attribute', function () {
		const element = dom();
		const key = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key), null);
		element.attr(key, value1, value2);
		assert.equal(element.getAttribute(key), `${value1} ${value2}`);
	});

	it('should set attributes by an object', function () {
		const element = dom();
		const key1 = `attr-${Date.now()}`;
		const key2 = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr({
			[key1]: value1,
			[key2]: value2
		});
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});

	it('should set attributes by arrays', function () {
		const element = dom();
		const key1 = `attr-${Date.now()}`;
		const key2 = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr(
			[key1, value1],
			[key2, value2]
		);
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});

	it('should set attributes by an array of arrays', function () {
		const element = dom();
		const key1 = `attr-${Date.now()}`;
		const key2 = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr([
			[key1, value1],
			[key2, value2]
		]);
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});

	it('should set attributes by an array of objects', function () {
		const element = dom();
		const key1 = `attr-${Date.now()}`;
		const key2 = `data-${Date.now()}`;
		const value1 = `value-${Date.now()}`;
		const value2 = `value-${Date.now()}`;
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr([
			{[key1]: value1},
			{[key2]: value2}
		]);
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});

});

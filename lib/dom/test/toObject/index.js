import dom from '../../index.js';

describe('J0Element.prototype.toObject', function () {

	it('should convert a text node to an object', function () {
		const text = `${Date.now()}`;
		const element = dom(text);
		assert.equal(element.toObject(), text);
	});

	it('should convert an element node to an object', function () {
		const t = 'h1';
		const text = `${Date.now()}`;
		const key1 = `key1-${Date.now()}`;
		const key2 = `data-key2-${Date.now()}`;
		const value1 = `value1-${Date.now()}`;
		const value2 = `value2-${Date.now()}`;
		const data = {
			t,
			a: [
				[key1, value1],
				[key2, value2]
			],
			c: [
				text,
				{
					a: [
						[key1, value2],
						[key2, value1]
					],
					c: [
						{
							c: [text]
						}
					]
				}
			]
		};
		const element = dom(data);
		assert.deepEqual(element.toObject(), data);
	});

});

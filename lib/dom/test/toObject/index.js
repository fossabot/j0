import dom from '../../index.js';

describe('J0Element.prototype.toObject', function () {

	it('should convert a text node to an object', function () {
		const text = `${Date.now()}`;
		const element = dom(text);
		assert.equal(element.toObject(), text);
	});

	it('should convert an element node to an object', function () {
		const text = `${Date.now()}`;
		const element = dom({
			c: [
				text
			]
		});
		assert.deepEqual(element.toObject(), {
			c: [
				text
			]
		});
	});

});

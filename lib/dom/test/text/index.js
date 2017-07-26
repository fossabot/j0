import dom from '../../index.js';

describe('J0Element.prototype.text', function () {

	it('should return its textContent', function () {
		const text = `${Date.now()}`;
		const element = dom({
			c: [
				{
					t: 'span',
					c: [text]
				}
			]
		});
		const expected = text;
		assert.equal(element.text, expected);
	});

	it('should set its textContent', function () {
		const text = `${Date.now()}`;
		const element = dom({
			c: [
				{},
				{},
				text
			]
		});
		element.setText(`<s>${text}</s>`);
		const expected = `<s>${text}</s>`;
		assert.equal(element.text, expected);
	});

});

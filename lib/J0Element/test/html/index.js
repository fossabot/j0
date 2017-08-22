import {
	dom
} from 'j0';

describe('J0Element.prototype.html', function () {

	it('should return its innerHTML', function () {
		const text = `${Date.now()}`;
		const element = dom({
			c: [
				{
					t: 'span',
					c: [text]
				}
			]
		});
		const expected = `<span>${text}</span>`;
		assert.equal(element.html, expected);
	});

	it('should set its innerHTML', function () {
		const text = `${Date.now()}`;
		const element = dom({
			c: [
				{},
				{},
				text
			]
		});
		element.setHTML(`<s>${text}</s>`);
		const expected = `<s>${text}</s>`;
		assert.equal(element.html, expected);
	});

});

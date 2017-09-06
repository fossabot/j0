import {
	N,
} from 'j0';

describe('N.prototype.text', function () {

	it('should return its textContent', function () {
		const text = `${Date.now()}`;
		const element = new N({
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
		const element = new N({
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

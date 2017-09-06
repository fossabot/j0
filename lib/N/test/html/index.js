import {
	N
} from 'j0';

describe('N.prototype.html', function () {

	it('should return its innerHTML', function () {
		const text = `${Date.now()}`;
		const element = new N({
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
		const element = new N({
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

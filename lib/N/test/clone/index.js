import {
	N,
} from 'j0';

describe('N.prototype.clone', function () {

	it('should clone a text node', function () {
		const text =`${Date.now()}`;
		const element1 = new N(text);
		assert.equal(element1.text, text);
		const element2 = element1.clone();
		assert.equal(element2.text, text);
	});

	it('should clone an element node', function () {
		const text =`${Date.now()}`;
		const element1 = new N({
			c: [text]
		});
		assert.equal(element1.text, text);
		const element2 = element1.clone();
		assert.equal(element2.text, text);
	});

	it('should clone an element node shallowly', function () {
		const text =`${Date.now()}`;
		const element1 = new N({
			c: [text]
		});
		assert.equal(element1.text, text);
		const element2 = element1.clone(false);
		assert.equal(element2.text, '');
	});

});

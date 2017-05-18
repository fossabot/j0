// import '../*/test';
import $ from '..';
import Date from '../../Date';

describe('$', function () {

	it('should create a new J0Element', function () {
		assert.equal('node' in $(), true);
	});

});

describe('J0Element.prototype.text', function () {

	it('should return its textContent', function () {
		const text = `${Date.now()}`;
		const element = $(text);
		assert.equal(element.text, text);
	});

	it('should set its textContent', function () {
		const text1 = `${Date.now()}-1`;
		const element1 = $();
		const text2 = `${Date.now()}-2`;
		const element2 = $({
			c: [
				element1,
				text2
			]
		});
		element1.text = text1;
		console.log(element2);
		assert.equal(element2.text, `${text1}${text2}`);
	});

});

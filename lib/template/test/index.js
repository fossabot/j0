import template from '..';

describe('template', function () {

	it('should return a string', function () {
		const source = `${Date.now()}`;
		assert.equal(template(source), source);
	});

	it('should insert a parameter', function () {
		const name = `${Math.random()}`;
		const source = 'Hello ${name}';
		const expected = `Hello ${name}`;
		assert.equal(template(source, {name}), expected);
	});

	it('should insert a parameter in plural form (1)', function () {
		template.setPluralForm(1);
		const source = '${count} ${count: apple, apples}';
		assert.equal(template(source, {count: 0}), '0 apples');
		assert.equal(template(source, {count: 1}), '1 apple');
		assert.equal(template(source, {count: 2}), '2 apples');
	});

	it('should insert a parameter in plural form (2)', function () {
		template.setPluralForm(1);
		const source = '${count} ${count:apple,apples}';
		assert.equal(template(source, {count: 0}), '0 apples');
		assert.equal(template(source, {count: 1}), '1 apple');
		assert.equal(template(source, {count: 2}), '2 apples');
	});

});
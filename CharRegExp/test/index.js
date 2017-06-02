import CharRegExp from '..';

function toSource({source}) {
	return source;
}

describe('CharRegExp', function () {

	it('should return a RegExp matches leading decimals', function () {
		const expr = new CharRegExp(/\d/);
		const testee = `${Date.now()}abc${Date.now()}`;
		assert.equal(
			testee.replace(expr.leading, ''),
			testee.replace(/^\d+/, '')
		);
	});

	it('should return a RegExp matches trailing decimals', function () {
		const expr = new CharRegExp(/\d/);
		const testee = `${Date.now()}abc${Date.now()}`;
		assert.equal(
			testee.replace(expr.trailing, ''),
			testee.replace(/\d+$/, '')
		);
	});

	it('should remove leading decimals', function () {
		const expr = new CharRegExp(/\d/);
		const testee = `${Date.now()}abc${Date.now()}`;
		assert.equal(
			expr.removeLeading(testee),
			testee.replace(/^\d+/, '')
		);
	});

	it('should remove trailing decimals', function () {
		const expr = new CharRegExp(/\d/);
		const testee = `${Date.now()}abc${Date.now()}`;
		assert.equal(
			expr.removeTrailing(testee),
			testee.replace(/\d+$/, '')
		);
	});

	it('should remove leading and trailing decimals', function () {
		const expr = new CharRegExp(/\d/);
		const testee = `${Date.now()}abc${Date.now()}`;
		assert.equal(
			expr.removeLeadingAndTrailing(testee),
			testee.replace(/^\d+|\d+$/g, '')
		);
	});

	it('should return whether the string has leading decimals or not', function () {
		const expr = new CharRegExp(/\d/);
		const testee = `${Date.now()}abc${Date.now()}`;
		assert.equal(
			expr.testLeading(testee),
			true
		);
		assert.equal(
			expr.testLeading(expr.removeLeading(testee)),
			false
		);
	});

	it('should return whether the string has trailing decimals or not', function () {
		const expr = new CharRegExp(/\d/);
		const testee = `${Date.now()}abc${Date.now()}`;
		assert.equal(
			expr.testTrailing(testee),
			true
		);
		assert.equal(
			expr.testTrailing(expr.removeTrailing(testee)),
			false
		);
	});

	it('should split the expression', function () {
		const expr = new CharRegExp(/[ABCD-G\x49-\x4B\u004C-\u004E]|[^PQ-TVW]/);
		const actual = expr.splitSource();
		const expected = [
			/[A]/,
			/[B]/,
			/[C]/,
			/[D-G]/,
			/[\x49-\x4B]/,
			/[\u004C-\u004E]/,
			/[^P]/,
			/[^Q-T]/,
			/[^V]/,
			/[^W]/
		];
		assert.deepEqual(
			actual,
			expected.map(toSource)
		);
	});

	it('should compile a simple new RegExp', function () {
		const expr1 = new CharRegExp(/ABCD/);
		const expr2 = new CharRegExp(/DEFG/);
		const expr3 = /EFGH/;
		const expr4 = CharRegExp.compile(expr1, expr2, expr3);
		assert.equal(toSource(expr4), toSource(/[ABCDEFGH]/));
	});

	it('should compile a new RegExp includes exclution', function () {
		const expr1 = new CharRegExp(/ABC/);
		const expr2 = new CharRegExp(/[^L-OPQR]/);
		const expr3 = /BCDX-Z/;
		const expr4 = new CharRegExp(/[^RS]/);
		const expr5 = CharRegExp.compile(expr1, expr2, expr3, expr4);
		assert.equal(toSource(expr5), toSource(/[ABCDX-Z]|[^L-OPQRS]/));
	});

});

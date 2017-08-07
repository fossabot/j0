function test(padStart, name = 'String.prototype.padStart') {

	describe(name, function () {

		it('should add some 0 at start of a string', function () {
			const src = '1';
			const actual = padStart.call(src, 3, '0');
			const expected = '001';
			assert.equal(actual, expected);
		});

		it('should add some spaces at start of a string', function () {
			const src = '1';
			const actual = padStart.call(src, 3);
			const expected = '  1';
			assert.equal(actual, expected);
		});

		it('should add some foos at start of a string', function () {
			const src = 'abc';
			const actual = padStart.call(src, 10, 'foo');
			const expected = 'foofoofabc';
			assert.equal(actual, expected);
		});

	});

}

export default test;

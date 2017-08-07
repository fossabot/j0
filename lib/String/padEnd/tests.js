function test(padEnd, name = 'String.prototype.padEnd') {

	describe(name, function () {

		it('should add some 0 at end of a string', function () {
			const src = '1';
			const actual = padEnd.call(src, 3, '0');
			const expected = '100';
			assert.equal(actual, expected);
		});

		it('should add some spaces at end of a string', function () {
			const src = '1';
			const actual = padEnd.call(src, 3);
			const expected = '1  ';
			assert.equal(actual, expected);
		});

		it('should add some foos at end of a string', function () {
			const src = 'abc';
			const actual = padEnd.call(src, 10, 'foo');
			const expected = 'abcfoofoof';
			assert.equal(actual, expected);
		});

	});

}

export default test;

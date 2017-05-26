function test(repeat, name = 'String.prototype.repeat') {

	describe(name, function () {

		it('should repeat the string for specified times', function () {
			const src = '3';
			const count = 10;
			const expected = '3333333333';
			assert.equal(repeat.call(src, count), expected);
		});

	});

}
export default test;

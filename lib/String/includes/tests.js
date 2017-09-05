function test(includes, name = 'String.prototype.includes') {

	describe(name, function () {

		it('should return whether the string includes the given string or not', function () {
			const fragment = Date.now().toString(16);
			const string1 = `abc${fragment}def`;
			const string2 = `abcdef`;
			assert.equal(includes.call(string1, fragment), true);
			assert.equal(includes.call(string2, fragment), false);
		});

		it('should return whether the string includes the given string or not [multibytes]', function () {
			const fragment = `𠠴𠠸𠠸𠠴${Date.now().toString(16)}`;
			const string1 = `abc${fragment}def`;
			const string2 = `abcdef`;
			assert.equal(includes.call(string1, fragment), true);
			assert.equal(includes.call(string2, fragment), false);
		});

	});

}
export default test;

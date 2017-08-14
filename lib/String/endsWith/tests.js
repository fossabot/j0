function test(endsWith, name = 'String.prototype.endsWith') {

	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			const fragment = Date.now().toString(16);
			const string1 = `${fragment}abc`;
			const string2 = `abc${fragment}`;
			assert.equal(endsWith.call(string1, fragment), false);
			assert.equal(endsWith.call(string2, fragment), true);
		});

		it('should return whether the string starts with the given string or not [multibytes]', function () {
			const fragment = `${Date.now().toString(16)}𠠴𠠸𠠸𠠴`;
			const string1 = `${fragment}abc`;
			const string2 = `abc${fragment}`;
			assert.equal(endsWith.call(string1, fragment), false);
			assert.equal(endsWith.call(string2, fragment), true);
		});

	});

}
export default test;

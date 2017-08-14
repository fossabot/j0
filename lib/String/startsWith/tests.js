function test(startsWith, name = 'String.prototype.startsWith') {

	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			const fragment = Date.now().toString(16);
			const string1 = `${fragment}abc`;
			const string2 = `abc${fragment}`;
			assert.equal(startsWith.call(string1, fragment), true);
			assert.equal(startsWith.call(string2, fragment), false);
		});

		it('should return whether the string starts with the given string or not [multibytes]', function () {
			const fragment = `𠠴𠠸𠠸𠠴${Date.now().toString(16)}`;
			const string1 = `${fragment}abc`;
			const string2 = `abc${fragment}`;
			assert.equal(startsWith.call(string1, fragment), true);
			assert.equal(startsWith.call(string2, fragment), false);
		});

	});

}
export default test;

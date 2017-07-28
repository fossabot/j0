function test(endsWith, name = 'String.prototype.endsWith') {

	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			const fragment = `${Date.now()}`;
			const string1 = `${Date.now()}abc`;
			const string2 = `abc${Date.now()}`;
			assert.equal(endsWith.call(string1, fragment), false);
			assert.equal(endsWith.call(string2, fragment), true);
		});

	});

}
export default test;
function test(startsWith, name = 'String.prototype.startsWith') {

	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			const fragment = `${Date.now()}`;
			const string1 = `${Date.now()}abc`;
			const string2 = `abc${Date.now()}`;
			assert.equal(startsWith.call(string1, fragment), true);
			assert.equal(startsWith.call(string2, fragment), false);
		});

	});

}
export default test;

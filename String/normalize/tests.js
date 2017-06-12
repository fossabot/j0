function test(normalize, name = 'String.prototype.normalize') {

	describe(name, function () {

		it('should not change digits', function () {
			const source = `${Date.now()}`;
			assert.equal(source, normalize.call(source));
		});

	});

}

export default test;

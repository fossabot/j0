function test(random, name = 'Math.random') {

	describe(name, function () {

		it('returns a number in [0, 1)', function () {
			for (let i = 0; i < 100; i++) {
				const x = random();
				assert(0 <= x && x < 1);
			}
		});

	});

}
export default test;

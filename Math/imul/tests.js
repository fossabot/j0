/* eslint-disable no-magic-numbers */
function test(imul, name = 'Math.imul') {

	describe(name, function () {

		it('imul(2, 4) should be 8', function () {
			assert.equal(imul(2, 4), 8);
		});

		it('imul(-1, 8) should be -8', function () {
			assert.equal(imul(-1, 8), -8);
		});

		it('imul(-2, -2) should be 4', function () {
			assert.equal(imul(-2, -2), 4);
		});

		// it('imul(0xffffffff, 5) should be -5', function () {
		// 	assert.equal(imul(0xffffffff, 5), -5);
		// });
		//
		// it('imul(0xfffffffe, 5) should be -10', function () {
		// 	assert.equal(imul(0xfffffffe, 5), -10);
		// });

	});

}
export default test;

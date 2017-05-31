/* eslint-disable no-magic-numbers */
function test(trunc, name = 'Math.trunc') {

	describe(name, function () {

		it('trunc(13.37) should be 13', function () {
			assert.equal(trunc(13.37), 13);
		});

		it('trunc(42.84) should be 42', function () {
			assert.equal(trunc(42.84), 42);
		});

		it('trunc(0.123) should be 0', function () {
			assert.equal(trunc(0.123), 0);
		});

		it('trunc(-0.123) should be -0', function () {
			assert.equal(trunc(-0.123), -0);
		});

		it('trunc(\'-1.123\') should be -1', function () {
			assert.equal(trunc('-1.123'), -1);
		});

		it('trunc(NaN) should be NaN', function () {
			assert.equal(isNaN(trunc(NaN)), true);
		});

		it('trunc(\'foo\') should be NaN', function () {
			assert.equal(isNaN(trunc('foo')), true);
		});

		it('trunc() should be NaN', function () {
			assert.equal(isNaN(trunc()), true);
		});

	});

}
export default test;

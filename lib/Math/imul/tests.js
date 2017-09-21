import {
	window,
} from 'j0';
function test(imul, name = 'Math.imul') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/imul/imul.png`,
				fn: function (x) {
					return imul(x, 1);
				},
				xRange: [-10, 10],
				yRange: [-10, 10],
				xGrid: [0],
				yGrid: [0]
			});
		});

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

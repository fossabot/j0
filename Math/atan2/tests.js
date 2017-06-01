/* eslint-disable no-magic-numbers */
function test(atan2, name = 'Math.atan2') {

	describe(name, function () {

		it(`[id:${name}+] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name: `${name}+`,
				url: `${window.root}/Math/atan2/atan2+.png`,
				fn: function (x) {
					return atan2(1, x);
				},
				xRange: [-10, 10],
				yRange: [0, Math.PI],
				xGrid: [-0.5, 0, 0.5],
				yGrid: [Math.PI / 2]
			});
		});

		it(`[id:${name}-] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name: `${name}-`,
				url: `${window.root}/Math/atan2/atan2-.png`,
				fn: function (x) {
					return atan2(-1, x);
				},
				xRange: [-10, 10],
				yRange: [-Math.PI, 0],
				xGrid: [-0.5, 0, 0.5],
				yGrid: [Math.PI / 2]
			});
		});

	});

}
export default test;

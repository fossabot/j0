/* eslint-disable no-magic-numbers */
import {
	window,
} from 'j0';
import ConditionalSet from '../index.js';

describe('ConditionalSet', function () {

	this.timeout(30000);

	it('should create a set', function () {
		const set = ConditionalSet.and(
			function (x) {
				return 0 < x;
			}
		);
		assert.equal(set.includes(-1), false);
		assert.equal(set.includes(1), true);
	});

	describe('ConditionalSet.prototype.includes', function () {

		const d = 0.6;
		const dd = 0.3;
		const offsets = [0, 1, 2]
		.map((t, index, {length}) => {
			const rad = index * 2 * Math.PI / length;
			return [
				dd * Math.cos(rad),
				dd * Math.sin(rad)
			];
		});

		it('[id:ConditionalSet1] should draw an expected diagram (AND)', async function () {
			const set = ConditionalSet.and(
				function (x, y) {
					return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
				}
			);
			await assert.graphicalEqual({
				name: 'ConditionalSet1',
				url: `${window.root}/ConditionalSet/ConditionalSet1.png`,
				fn: function (x, y) {
					return set.includes(x, y) ? 1 : 0;
				},
				xRange: [-1, 1],
				yRange: [-1, 1],
				zRange: [0, 1]
			});
		});

		it('[id:ConditionalSet2] should draw an expected diagram (OR)', async function () {
			const set = ConditionalSet.or(
				function (x, y) {
					return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
				}
			);
			await assert.graphicalEqual({
				name: 'ConditionalSet2',
				url: `${window.root}/ConditionalSet/ConditionalSet2.png`,
				fn: function (x, y) {
					return set.includes(x, y) ? 1 : 0;
				},
				xRange: [-1, 1],
				yRange: [-1, 1],
				zRange: [0, 1]
			});
		});

		it('[id:ConditionalSet3] should draw an expected diagram (XOR)', async function () {
			const set = ConditionalSet.xor(
				function (x, y) {
					return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
				}
			);
			await assert.graphicalEqual({
				name: 'ConditionalSet3',
				url: `${window.root}/ConditionalSet/ConditionalSet3.png`,
				fn: function (x, y) {
					return set.includes(x, y) ? 1 : 0;
				},
				xRange: [-1, 1],
				yRange: [-1, 1],
				zRange: [0, 1]
			});
		});

		it('[id:ConditionalSet4] should draw an expected diagram (NOT)', async function () {
			const set = ConditionalSet.not(
				function (x, y) {
					return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
				},
				function (x, y) {
					return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
				}
			);
			await assert.graphicalEqual({
				name: 'ConditionalSet4',
				url: `${window.root}/ConditionalSet/ConditionalSet4.png`,
				fn: function (x, y) {
					return set.includes(x, y) ? 1 : 0;
				},
				xRange: [-1, 1],
				yRange: [-1, 1],
				zRange: [0, 1]
			});
		});

		it('[id:ConditionalSet5] should draw an expected diagram (Complex)', async function () {
			const set = ConditionalSet.and(
				ConditionalSet.or(
					function (x, y) {
						return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
					},
					function (x, y) {
						return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
					}
				),
				ConditionalSet.not(
					function (x, y) {
						return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
					}
				)
			);
			await assert.graphicalEqual({
				name: 'ConditionalSet5',
				url: `${window.root}/ConditionalSet/ConditionalSet5.png`,
				fn: function (x, y) {
					return set.includes(x, y) ? 1 : 0;
				},
				xRange: [-1, 1],
				yRange: [-1, 1],
				zRange: [0, 1]
			});
		});

	});

});

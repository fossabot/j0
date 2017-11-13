import ConditionalSet from '../index.js';

describe('ConditionalSet', function () {

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

		describe('ConditionalSet:and', async function () {
			const set = ConditionalSet.and(
				function (...args) {
					return args
					.every((arg) => {
						return typeof arg === 'number';
					});
				},
				function (x, y) {
					return (x + y) % 2 === 0;
				},
				function (x, y) {
					return (x + y) % 3 === 0;
				}
			);
			[
				['', 1, false],
				[0, 1, false],
				[1, 1, false],
				[3, 6, false],
				[6, 6, true],
			]
			.forEach(([x, y, expected]) => {
				it(`set.includes(${x}, ${y}) → ${expected}`, function () {
					assert.equal(set.includes(x, y), expected);
				});
			});
		});

		describe('ConditionalSet:or', async function () {
			const set = ConditionalSet.or(
				function (...args) {
					return args
					.every((arg) => {
						return typeof arg === 'number';
					});
				},
				function (x, y) {
					return (x + y) % 2 === 0;
				},
				function (x, y) {
					return (x + y) % 3 === 0;
				}
			);
			[
				['', 1, false],
				[0, 1, true],
				[1, 1, true],
				[3, 6, true],
				[6, 6, true],
			]
			.forEach(([x, y, expected]) => {
				it(`set.includes(${x}, ${y}) → ${expected}`, function () {
					assert.equal(set.includes(x, y), expected);
				});
			});
		});

		describe('ConditionalSet:xor', async function () {
			const set = ConditionalSet.xor(
				function (...args) {
					return args
					.every((arg) => {
						return typeof arg === 'number';
					});
				},
				function (x, y) {
					return (x + y) % 2 === 0;
				},
				function (x, y) {
					return (x + y) % 3 === 0;
				}
			);
			[
				['', 1, false],
				[0, 1, true],
				[1, 1, false],
				[3, 6, false],
				[6, 6, false],
			]
			.forEach(([x, y, expected]) => {
				it(`set.includes(${x}, ${y}) → ${expected}`, function () {
					assert.equal(set.includes(x, y), expected);
				});
			});
		});

		describe('ConditionalSet:not', async function () {
			const set = ConditionalSet.not(
				function (...args) {
					return args
					.every((arg) => {
						return typeof arg === 'number';
					});
				},
				function (x, y) {
					return (x + y) % 2 === 0;
				},
				function (x, y) {
					return (x + y) % 3 === 0;
				}
			);
			[
				['', 1, true],
				[0, 1, false],
				[1, 1, false],
				[3, 6, false],
				[6, 6, false],
			]
			.forEach(([x, y, expected]) => {
				it(`set.includes(${x}, ${y}) → ${expected}`, function () {
					assert.equal(set.includes(x, y), expected);
				});
			});
		});

	});

});

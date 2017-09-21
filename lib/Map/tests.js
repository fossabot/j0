/* eslint-disable no-magic-numbers */
import {
	Symbol,
} from 'j0';

function tests(Map, name = 'Map') {

	describe(name, function () {

		it('should create an instance', function () {
			assert.doesNotThrow(function () {
				const map = new Map();
				return map;
			});
		});

		it('should return keys', function () {
			const map = new Map();
			assert.deepEqual(Array.from(map.keys()), []);
		});

		it('should return values', function () {
			const map = new Map();
			assert.deepEqual(Array.from(map.values()), []);
		});

		it('should initialize with given array', function () {
			const map = new Map([
				[0, 1]
			]);
			assert.deepEqual(
				{
					keys: Array.from(map.keys()),
					values: Array.from(map.values())
				},
				{
					keys: [0],
					values: [1]
				}
			);
		});

		it('should initialize with given iterable', function () {
			const iterable = {
				[Symbol.iterator]: function* () {
					let count = 0;
					while (count < 1) {
						yield [count, count + 1];
						count += 1;
					}
				}
			};
			const map = new Map(iterable);
			assert.deepEqual({
				keys: Array.from(map.keys()),
				values: Array.from(map.values())
			}, {
				keys: [0],
				values: [1]
			});
		});

		it('should support forEach()', function () {
			const map = new Map([
				[1, 2],
				[3, 4],
				[5, 6]
			]);
			const context = {};
			const results = [];
			map
			.forEach(function (...args) {
				map.delete(args[1]);
				args.push(this);
				results.push(args);
			}, context);
			assert.deepEqual(results, [
				[2, 1, map, context],
				[4, 3, map, context],
				[6, 5, map, context]
			]);
		});

	});

}

export default tests;

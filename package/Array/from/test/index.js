import arrayFrom from '..';
import isArray from '../../isArray';

function createArrayFromArguments() {
	return arrayFrom(arguments);
}

describe('Array/from', function () {

	it('should create a new array from arguments', function () {
		const result = createArrayFromArguments(1, 2, 3);
		assert.equal(isArray(result), true);
		assert.deepEqual(result, [1, 2, 3]);
	});


	it('should create a new array from an array-like object', function () {
		const result = arrayFrom({
			0: 1,
			1: 2,
			2: 3,
			length: 3
		});
		assert.equal(isArray(result), true);
		assert.deepEqual(result, [1, 2, 3]);
	});

	it('should create a new array from an iterable object', function () {
		let count = 0;
		const iterator = {
			next: function () {
				count += 1;
				return {
					value: count,
					done: 5 <= count
				};
			}
		};
		const result = arrayFrom(iterator);
		assert.equal(isArray(result), true);
		assert.deepEqual(result, [1, 2, 3, 4]);
	});

});

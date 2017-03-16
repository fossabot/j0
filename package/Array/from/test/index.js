import arrayFrom from '..';
import isArray from '../../isArray';

function fromArguments() {
	return arrayFrom(arguments);
}

it('should create a new instance of array from arguments', function () {
	const result = fromArguments(1, 2, 3);
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});


it('should create a new instance of array from an array-like object', function () {
	const result = arrayFrom({0: 1, 1: 2, 2: 3, length: 3});
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});

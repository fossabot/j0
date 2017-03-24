import Array from '../..';
import isArray from '../../isArray';

function createArrayFromArguments() {
	return Array.from(arguments);
}

it('should create a new instance of array from arguments', function () {
	const result = createArrayFromArguments(1, 2, 3);
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});


it('should create a new instance of array from an array-like object', function () {
	const result = Array.from({
		0: 1,
		1: 2,
		2: 3,
		length: 3
	});
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});

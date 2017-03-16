import forEach from '..';

it('should iterate an array', function () {
	const array = [1, 2, 3];
	forEach(array, function (value, index, arr) {
		assert.deepEqual([value, arr], [array[index], arr]);
	});
});

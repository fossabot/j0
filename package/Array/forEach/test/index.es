import forEach from '..';
import push from '../../push';

it('should iterate an array', function () {
	const array = [1, 2, 3];
	const argsList = [];
	forEach(array, function (...args) {
		push(argsList, args);
	});
	assert.deepEqual(argsList, [
		[1, 0, array],
		[2, 1, array],
		[3, 2, array]
	]);
});

import {
	JSON,
	deepEqual,
} from 'j0';

describe('deepEqual', function () {

	[
		[
			123,
			123,
			true,
		],
		[
			123,
			321,
			false,
		],
		[
			'abc',
			'abc',
			true,
		],
		[
			'abc',
			'abd',
			false,
		],
		[
			{0: 0, 1: 1},
			[0, 1],
			true,
		],
		[
			{0: 0, 1: 1},
			[0, 2],
			false,
		],
		[
			{0: 0, 1: 1, 2: [3, 4]},
			[0, 1, {0: 3, 1: 4}],
			true,
		],
		[
			{0: 0, 1: 1, 2: [3, 4]},
			[0, 1, {0: 3, 1: 5}],
			false,
		],
	]
	.forEach(([a, b, expected]) => {
		it(`(${JSON.stringify(a)}, ${JSON.stringify(b)}) => ${expected}`, function () {
			assert.equal(deepEqual(a, b), expected);
		});
	});

});

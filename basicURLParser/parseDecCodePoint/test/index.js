/* eslint-disable no-magic-numbers */
import parseDecCodePoint from '..';

describe('basicURLParser/parseDecCodePoint', function () {

	[
		['0', 0],
		['1', 1],
		['2', 2],
		['3', 3],
		['4', 4],
		['5', 5],
		['6', 6],
		['7', 7],
		['8', 8],
		['9', 9]
	]
	.forEach(([string, expected]) => {
		const codePoint = string.codePointAt(0);
		it(`should return ${expected} from "${string}"`, function () {
			assert.equal(parseDecCodePoint(codePoint), expected);
		});
	});

});

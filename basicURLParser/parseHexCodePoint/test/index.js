/* eslint-disable no-magic-numbers */
import parseHexCodePoint from '..';

describe('basicURLParser/parseHexCodePoint', function () {

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
		['9', 9],
		['a', 10],
		['b', 11],
		['c', 12],
		['d', 13],
		['e', 14],
		['f', 15],
		['A', 10],
		['B', 11],
		['C', 12],
		['D', 13],
		['E', 14],
		['F', 15]
	]
	.forEach(([string, expected]) => {
		const codePoint = string.codePointAt(0);
		it(`should return ${expected} from "${string}"`, function () {
			assert.equal(parseHexCodePoint(codePoint), expected);
		});
	});

});

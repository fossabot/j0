/* eslint-disable no-magic-numbers */
import lookupMappingTable from '..';
import {
	VALID,
	MAPPED,
	DISALLOWED,
	DISALLOWED_STD3_VALID
} from '../../statuses';

describe('Unicode/lookupMappingTable', function () {

	[
		[0x0000, 0x002C, 'disallowed_STD3_valid', DISALLOWED_STD3_VALID],
		[0x002D, 0x002E, 'valid', VALID],
		[0x002F, 0x002F, 'disallowed_STD3_valid', DISALLOWED_STD3_VALID],
		[0x0030, 0x0039, 'valid', VALID],
		[0x003A, 0x0040, 'disallowed_STD3_valid', DISALLOWED_STD3_VALID],
		[0x0041, 0x0041, 'mapped', MAPPED],
		[0x10F000, 0x10FFFF, 'disallowed', DISALLOWED]
	]
	.forEach(([lower, upper, status, expected]) => {
		it(`should return ${status} [${lower.toString(16)}..${upper.toString(16)}]`, function () {
			for (let codePoint = lower; codePoint <= upper; codePoint++) {
				assert.equal(lookupMappingTable(codePoint)[0], expected);
			}
		});
	});

});

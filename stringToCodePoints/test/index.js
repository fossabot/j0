/* eslint-disable no-magic-numbers */
import stringToCodePoints from '..';
describe('stringToCodePoints', function () {

	[
		['abc', 0x61, 0x63],
		['𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉𐀊𐀋𐀌𐀍𐀎𐀏', 0x10000, 0x1000F],
		['𐰀𐰁𐰂𐰃𐰄𐰅𐰆𐰇𐰈𐰉𐰊𐰋𐰌𐰍𐰎𐰏𐰐𐰑𐰒𐰓𐰔𐰕𐰖𐰗𐰘𐰙𐰚𐰛𐰜𐰝𐰞𐰟𐰠', 0x10c00, 0x10c20],
		['􏿰􏿱􏿲􏿳􏿴􏿵􏿶􏿷􏿸􏿹􏿺􏿻􏿼􏿽􏿾􏿿', 0x10FFF0, 0x10FFFF]
	]
	.forEach(([string, from, to]) => {
		it(`should be return [${from.toString(16)}, ..., ${to.toString(16)}] from "${string}"`, function () {
			const codePoints = stringToCodePoints(string);
			const expectedCodePoints = [];
			for (let i = from; i <= to; i++) {
				expectedCodePoints.push(i);
			}
			assert.deepEqual(codePoints, expectedCodePoints);
		});
	});

});

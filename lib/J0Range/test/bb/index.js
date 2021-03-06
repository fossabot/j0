import {
	J0Range,
	console,
	browser,
} from 'j0';

function test_bb(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.bb`, function () {

		it(`[${textDirectionType}] should have left, right, top, bottom, width, height`, function () {
			const range = new J0Range();
			range.set(this.firstTextNode, 0);
			const bb = range.bb;
			if (this.debug) {
				console.log(bb);
			}
			assert('left' in bb);
			assert('right' in bb);
			assert('top' in bb);
			assert('bottom' in bb);
			assert('width' in bb);
			assert('height' in bb);
		});

		if (browser.name === 'firefox' && (/^[tb]/).test(textDirectionType) && !this.debug) {
			it('should skip the tests', function () {
				it('should skip the tests', function () {
					console.error([
						'Firefox fails to get getBoundingClientRect on vertical writing-mode',
						'https://bugzilla.mozilla.org/show_bug.cgi?id=1159309'
					].join('\n'));
				});
			});
			return;
		}

		it(`[${textDirectionType}] should return a rect from collapsed range`, function () {
			const range = new J0Range();
			range.set(this.firstTextNode, 0);
			const bb1 = range.bb;
			range.set(this.firstTextNode, 1);
			const bb2 = range.bb;
			switch (textDirectionType.slice(0, 2)) {
			case 'lr':
				assert.operator(bb1.left, '<', bb2.left);
				break;
			case 'rl':
				assert.operator(bb2.left, '<', bb1.left);
				break;
			case 'tb':
				assert.operator(bb1.top, '<', bb2.top);
				break;
			case 'bt':
				assert.operator(bb2.top, '<', bb1.top);
				break;
			}
		});

	});

}

export default test_bb;

import {
	J0Range,
	browser,
} from 'j0';
import checkRange from '../checkRange';

function test_backwardStart(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.backwardStart`, function () {

		if (browser.name === 'firefox' && (/^[rtb]/).test(textDirectionType) && !this.debug) {
			it('should skip the tests', function () {
				console.error([
					'Firefox fails to get getBoundingClientRect on vertical writing-mode',
					'https://bugzilla.mozilla.org/show_bug.cgi?id=1159309'
				].join('\n'));
			});
			return;
		}

		it(`[${textDirectionType}] should move start in a node`, function () {
			const range = new J0Range(null, this.element);
			range.set(this.lastTextNode, this.lastTextNode.length);

			for (const textNode of this.textNodes.slice().reverse()) {
				const index = this.textNodes.indexOf(textNode);
				for (let i = 0; i < textNode.length; i++) {
					checkRange.prefix = `[${index}-${textNode.length - i}]`;
					assert.equal(range.backwardStart(), true, `${checkRange.prefix} failed to move`);
					checkRange(range, textNode, textNode.length - (i + 1), this.lastTextNode, this.lastTextNode.length);
				}
				if (range.backwardStart()) {
					checkRange(range, this.textNodes[index - 1], this.textNodes[index - 1].length, this.lastTextNode, this.lastTextNode.length);
				} else {
					assert.equal(index, 0, `${checkRange.prefix} failed to move at start`);
				}
			}
			assert.equal(range.backwardStart(), false, `succeeded to move unexpectedly`);
			assert.deepEqual(this.events, [], `backwardStart emitted events`);
		});

	});

}

export default test_backwardStart;

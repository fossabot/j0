import {
	J0Range,
	browser,
} from 'j0';
import checkRange from '../checkRange';

function test_forwardEnd(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.forwardEnd`, function () {

		if (browser.name === 'firefox' && (/^[rtb]/).test(textDirectionType) && !this.debug) {
			it('should skip the tests', function () {
				console.error([
					'Firefox fails to get getBoundingClientRect on vertical writing-mode',
					'https://bugzilla.mozilla.org/show_bug.cgi?id=1159309'
				].join('\n'));
			});
			return;
		}

		it(`[${textDirectionType}] should move end`, function () {
			this.timeout(80000);
			const range = new J0Range(null, this.element);
			range.set(this.firstTextNode, 0);
			for (const textNode of this.textNodes) {
				const index = this.textNodes.indexOf(textNode);
				for (let i = 0; i < textNode.length; i++) {
					checkRange.prefix = `[${index}-${i}]`;
					assert.equal(range.forwardEnd(), true, `${checkRange.prefix} failed to move`);
					checkRange(range, this.firstTextNode, 0, textNode, i + 1);
				}
				if (range.forwardEnd()) {
					checkRange(range, this.firstTextNode, 0, this.textNodes[index + 1], 0);
				} else {
					assert.equal(index, this.textNodes.length - 1, `${checkRange.prefix} failed to move at end`);
				}
			}
			assert.equal(range.forwardEnd(), false, `succeeded to move unexpectedly`);
			assert.deepEqual(this.events, [], `forwardEnd emitted events`);
		});

	});

}

export default test_forwardEnd;

import {
	J0Range,
} from 'j0';
import checkRange from '../checkRange';

function test_forwardEnd(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.forwardEnd`, function () {

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

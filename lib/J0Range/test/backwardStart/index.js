import {
	J0Range,
} from 'j0';
import checkRange from '../checkRange';

function test_backwardStart(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.backwardStart`, function () {

		it(`[${textDirectionType}] should move start in a node`, function () {
			const range = new J0Range(null, this.element);
			range.set(this.lastTextNode, this.lastTextNode.length);
			this.textNodes
			.slice()
			.reverse()
			.forEach((textNode, index) => {
				for (let i = 0; i < textNode.length; i++) {
					checkRange.prefix = `[${index}-${i}]`;
					assert.equal(range.backwardStart(), true, `${checkRange.prefix} failed to move`);
					checkRange(range, textNode, textNode.length - (i + 1), this.lastTextNode, this.lastTextNode.length);
				}
			});
			assert.equal(range.backwardStart(), false, `succeeded to move unexpectedly`);
			assert.deepEqual(this.events, [], `backwardStart emitted events`);
		});

	});

}

export default test_backwardStart;

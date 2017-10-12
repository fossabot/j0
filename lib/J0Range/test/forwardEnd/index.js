import {
	J0Range,
} from 'j0';
import checkRange from '../checkRange';

function test_forwardEnd(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.forwardEnd`, function () {

		it(`[${textDirectionType}] should move end in a node`, function () {
			const range = new J0Range(null, this.element);
			range.set(this.firstTextNode, 0);
			this.textNodes
			.forEach((textNode, index) => {
				for (let i = 0; i < textNode.length; i++) {
					checkRange.prefix = `[${index}-${i}]`;
					assert.equal(range.forwardEnd(), true, `${checkRange.prefix} failed to move`);
					checkRange(range, this.firstTextNode, 0, textNode, i + 1);
				}
			});
			assert.equal(range.forwardEnd(), false, `succeeded to move unexpectedly`);
			assert.deepEqual(this.events, [], `forwardEnd emitted events`);
		});

	});

}

export default test_forwardEnd;

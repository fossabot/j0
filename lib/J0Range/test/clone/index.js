import {
	J0Range,
	console,
} from 'j0';

function test_clone(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.clone`, function () {

		it(`[${textDirectionType}] should create a cloned J0Range`, function () {
			const range = new J0Range();
			range.set(this.textNode, 0);
			assert.doesNotThrow(() => {
				range.clone();
			});
		});

		it(`[${textDirectionType}] should create a cloned J0Range which has same options`, function () {
			const range = new J0Range();
			range.set(this.textNode, 0);
			const cloned = range.clone();
			if (console.debugMode) {
				console.log('range :', range);
				console.log('cloned:', cloned);
			}
			assert(range.range !== cloned.range, 'range.range should be different from cloned.range');
			assert.deepEqual(range.startContainer, cloned.startContainer, 'different startContainer');
			assert.equal(range.startOffset, cloned.startOffset, 'different startOffset');
			assert.equal(range.endContainer, cloned.endContainer, 'different endContainer');
			assert.equal(range.endOffset, cloned.endOffset, 'different endOffset');
		});

	});

}

export default test_clone;

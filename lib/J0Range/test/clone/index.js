import {
	J0Range,
	console,
} from 'j0';
import checkRange from '../checkRange';

function test_clone(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.clone`, function () {

		it(`[${textDirectionType}] should create a cloned J0Range`, function () {
			const range = new J0Range();
			range.set(this.firstTextNode, 0);
			assert.doesNotThrow(() => {
				range.clone();
			});
		});

		it(`[${textDirectionType}] should create a cloned J0Range which has same options`, function () {
			const range = new J0Range();
			range.set(this.firstTextNode, 0);
			const cloned = range.clone();
			if (console.debugMode) {
				console.log('range :', range);
				console.log('cloned:', cloned);
			}
			assert(range.range !== cloned.range, 'range.range should be different from cloned.range');
			checkRange(cloned, range.startContainer, range.startOffset, range.endContainer, range.endOffset);
		});

	});

}

export default test_clone;

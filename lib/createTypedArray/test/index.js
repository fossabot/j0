/* global Uint8Array */
/* eslint-disable no-magic-numbers */
import createTypedArray from '..';
describe('createTypedArray', function () {

	it('should create an Uint8Array', function () {
		const src = [0, 1, 2, 3, 4, 5];
		const actual = createTypedArray(Uint8Array, src);
		assert.equal(actual instanceof Uint8Array, true);
		assert.deepEqual(Array.from(actual), src);
	});

});

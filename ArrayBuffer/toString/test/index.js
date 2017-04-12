import arrayBufferToString from '..';
import readBlob from '../../../FileReader/readBlob';
import Blob from '../../../Blob';

function createArrayBuffer(data) {
	return readBlob(new Blob([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', function () {
		const src = 'hello';
		return createArrayBuffer(src)
		.then(function (arrayBuffer) {
			assert.equal(arrayBufferToString(arrayBuffer), src);
		});
	});

	it('should return こんにちは', function () {
		const src = 'こんにちは';
		return createArrayBuffer(src)
		.then(function (arrayBuffer) {
			assert.equal(arrayBufferToString(arrayBuffer), src);
		});
	});

});

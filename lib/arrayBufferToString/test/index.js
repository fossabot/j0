import arrayBufferToString from '../index.js';
import {
	readBlob,
	document,
	Blob,
	fetch,
} from 'j0';

function createArrayBuffer(data) {
	return readBlob(new Blob([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', async function () {
		const src = 'hello';
		const arrayBuffer = await createArrayBuffer(src);
		assert.equal(arrayBufferToString(arrayBuffer), src);
	});

	it('should return こんにちは', async function () {
		const src = 'こんにちは';
		const arrayBuffer = await createArrayBuffer(src);
		assert.equal(arrayBufferToString(arrayBuffer), src);
	});

	it('should return wagahaiha-nekodearu.txt', async function () {
		this.timeout(8000);
		const root = document.getElementById('root').text;
		const src = await (await fetch(`${root}/arrayBufferToString/wagahaiha-nekodearu.txt`)).text();
		const arrayBuffer = await createArrayBuffer(src);
		assert.equal(arrayBufferToString(arrayBuffer), src);
	});

});

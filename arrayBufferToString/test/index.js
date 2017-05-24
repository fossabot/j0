import arrayBufferToString from '..';
import {
	readBlob,
	console
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
		this.timeout(5000);
		const src = await (await fetch('wagahaiha-nekodearu.txt')).text();
		const arrayBuffer = await createArrayBuffer(src);
		assert.equal(arrayBufferToString(arrayBuffer), src);
		const results = [];
		let remains = 10;
		while (0 < remains--) {
			const start = Date.now();
			arrayBufferToString(arrayBuffer);
			results.push(Date.now() - start);
		}
		const average = results
		.reduce((sum, value) => {
			return sum + value;
		}, 0) / results.length;
		console.log(`Average: ${average}ms\n`, results);
	});

});

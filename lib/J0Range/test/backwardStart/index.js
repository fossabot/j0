import {
	J0Range,
	N,
	console,
} from 'j0';

function test_backwardStart(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.backwardStart`, function () {

		beforeEach(function () {
			const textNode1 = new N('ABC').node;
			const textNode2 = new N('DEF').node;
			const textNode3 = new N('GHI').node;
			const textNode4 = new N('JKL').node;
			const textNode5 = new N('MNO').node;
			const textNode6 = new N('PQR').node;
			this.element
			.empty()
			.append(
				textNode1,
				{
					c: [textNode2],
				},
				textNode3,
				{
					c: [
						textNode4,
						{
							c: [textNode5],
						},
						textNode6,
					],
				}
			);
			this.test.ctx.textNodes = [
				textNode1,
				textNode2,
				textNode3,
				textNode4,
				textNode5,
				textNode6,
			];
		});

		it(`[${textDirectionType}] should move start in a node`, function () {
			this.textNodes
			.forEach((textNode) => {
				const range = new J0Range(null, this.element);
				range.set(textNode, textNode.length);
				for (let i = 0; i < textNode.length; i++) {
					assert(range.backwardStart(), `failed to move start [${i}]`);
					assert(range.startContainer === textNode, `startContainer error [${i}]`);
					assert.equal(range.startOffset, textNode.length - (i + 1), `startOffset error [${i}]`);
					assert(range.endContainer === textNode, `endContainer error [${i}]`);
					assert.equal(range.endOffset, textNode.length, `endOffset error [${i}]`);
				}
			});
		});

		it(`[${textDirectionType}] should move start to the previous node`, function () {
			const range = new J0Range(null, this.element);
			this.textNodes
			.forEach((textNode, index, textNodes) => {
				range.set(textNode, 0);
				if (range.backwardStart()) {
					const previousTextNode = textNodes[index - 1];
					if (this.debug) {
						console.log('  actual:', range.startContainer, 'expected:', previousTextNode);
					}
					assert(range.startContainer === previousTextNode, 'startContainer error');
					assert.equal(range.startOffset, previousTextNode.length - 1, 'startOffset error');
					assert(range.endContainer === textNode, 'endContainer error');
					assert.equal(range.endOffset, 0, 'endOffset error');
				} else {
					assert(index === 0);
				}
			});
		});

	});

}

export default test_backwardStart;

import {
	J0Range,
	N,
	console,
} from 'j0';

function test_forwardEnd(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.forwardEnd`, function () {

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

		it(`[${textDirectionType}] should move end in a node`, function () {
			this.textNodes
			.forEach((textNode) => {
				const range = new J0Range(null, this.element);
				range.set(textNode, 0);
				for (let i = 0; i < textNode.length; i++) {
					assert(range.forwardEnd(), `failed to move end [${i}]`);
					assert(range.startContainer === textNode, `startContainer error [${i}]`);
					assert.equal(range.startOffset, 0, `startOffset error [${i}]`);
					assert(range.endContainer === textNode, `endContainer error [${i}]`);
					assert.equal(range.endOffset, i + 1, `endOffset error [${i}]`);
				}
			});
		});

		it(`[${textDirectionType}] should move end to the next node`, function () {
			const range = new J0Range(null, this.element);
			this.textNodes
			.forEach((textNode, index, textNodes) => {
				range.set(textNode, 0, textNode, textNode.length);
				if (range.forwardEnd()) {
					const nextTextNode = textNodes[index + 1];
					if (this.debug) {
						console.log('  actual:', range.endContainer, 'expected:', nextTextNode);
					}
					assert(range.endContainer === nextTextNode, 'endContainer error');
					assert.equal(range.endOffset, 1, 'endOffset error');
					assert(range.startContainer === textNode, 'startContainer error');
					assert.equal(range.startOffset, 0, 'startOffset error');
				} else {
					assert.equal(index, textNodes.length - 1);
				}
			});
		});

	});

}

export default test_forwardEnd;

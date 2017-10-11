import {
	J0Range,
	N,
	assign,
	console,
} from 'j0';

function test_modify(textDirectionType, visualDirections) {

	describe(`[${textDirectionType}] J0Range.prototype.modify`, function () {

		beforeEach(function () {
			const textNode0 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ').node;
			const textNode1 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ').node;
			const textNode2 = new N('iiiiii').node;
			const textNode3 = new N('0').node;
			const textNode4 = new N('MMMMMM').node;
			const textNode5 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ').node;
			const br = {t: 'br'};
			this.element
			.empty()
			.append(
				textNode0,
				br,
				textNode1,
				br,
				{
					c: [textNode2],
				},
				br,
				textNode3,
				br,
				{
					c: [
						textNode4,
						br,
						{
							c: [textNode5],
						},
					],
				}
			);
			assign(
				this.test.ctx,
				{
					textNode0,
					textNode1,
					textNode2,
					textNode3,
					textNode4,
					textNode5,
				}
			);
		});

		visualDirections
		.forEach(([visualDirection, textDirection]) => {

			switch (textDirection) {
			case 'mainF':
				it(`[${textDirectionType}] should move forward along to main axis`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.textNode1, 2);
					range.modify('move', visualDirection);
					assert(range.startContainer === this.textNode1, `startContainer error`);
					assert.equal(range.startOffset, 3, `startOffset error`);
					assert(range.endContainer === this.textNode1, `endContainer error`);
					assert.equal(range.endOffset, 3, `endOffset error`);
				});
				it(`[${textDirectionType}] should move forward along to main axis and hit the end`, function () {
					const events = [];
					this.element
					.on('range:first', function () {
						events.push('range:first');
					})
					.on('range:last', function () {
						events.push('range:last');
					})
					.on('range:firstline', function () {
						events.push('range:firstline');
					})
					.on('range:lastline', function () {
						events.push('range:lastline');
					})
					const range = new J0Range(null, this.element);
					range.set(this.textNode5, this.textNode5.length - 1);

					range.modify('move', visualDirection);
					assert(range.startContainer === this.textNode5, `startContainer error`);
					assert.equal(range.startOffset, this.textNode5.length, `startOffset error`);
					assert(range.endContainer === this.textNode5, `endContainer error`);
					assert.equal(range.endOffset, this.textNode5.length, `endOffset error`);

					range.modify('move', visualDirection);
					assert(range.startContainer === this.textNode5, `startContainer error`);
					assert.equal(range.startOffset, this.textNode5.length, `startOffset error`);
					assert(range.endContainer === this.textNode5, `endContainer error`);
					assert.equal(range.endOffset, this.textNode5.length, `endOffset error`);

					assert.deepEqual(events, ['range:last']);
				});
				break;
			case 'mainB':
				it(`[${textDirectionType}] should move backward along to main axis`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.textNode1, 2);
					range.modify('move', visualDirection);
					assert(range.startContainer === this.textNode1, `startContainer error`);
					assert.equal(range.startOffset, 1, `startOffset error`);
					assert(range.endContainer === this.textNode1, `endContainer error`);
					assert.equal(range.endOffset, 1, `endOffset error`);
				});
				it(`[${textDirectionType}] should move forward along to main axis and hit the start`, function () {
					const events = [];
					this.element
					.on('range:first', function () {
						events.push('range:first');
					})
					.on('range:last', function () {
						events.push('range:last');
					})
					.on('range:firstline', function () {
						events.push('range:firstline');
					})
					.on('range:lastline', function () {
						events.push('range:lastline');
					})
					const range = new J0Range(null, this.element);
					range.set(this.textNode0, 1);

					range.modify('move', visualDirection);
					assert(range.startContainer === this.textNode0, `[1st modification] startContainer error`);
					assert.equal(range.startOffset, 0, `[1st modification] startOffset error`);
					assert(range.endContainer === this.textNode0, `[1st modification] endContainer error`);
					assert.equal(range.endOffset, 0, `[1st modification] endOffset error`);

					range.modify('move', visualDirection);
					assert(range.startContainer === this.textNode0, `[2nd modification] startContainer error`);
					assert.equal(range.startOffset, 0, `[2nd modification] startOffset error`);
					assert(range.endContainer === this.textNode0, `[2nd modification] endContainer error`);
					assert.equal(range.endOffset, 0, `[2nd modification] endOffset error`);

					assert.deepEqual(events, ['range:first']);
				});
				break;
			case 'crossF':
				break;
			case 'crossB':
				break;
			}

		});

	});

}

export default test_modify;

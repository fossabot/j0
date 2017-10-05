import {
	N,
	document,
} from 'j0';

const directions = N.directions;
const commonStyle = [
	'position:fixed;',
	'left:0;',
	'right:0;',
	'top:0;',
	'bottom:0;',
	'opacity:0.4;',
	'font-family:Courier,monospace;',
	'white-space:pre;',
	'pointer-events:none;',
].join('');

describe('N.prototype.getTextDirection', function () {

	[
		['-ms-writing-mode:bt-rl;writing-mode:vertical-rl;direction:rtl;unicode-bidi:bidi-override;', [directions.top, directions.left]],
		['direction:ltr;unicode-bidi:normal;', [directions.right, directions.bottom]],
		['-ms-writing-mode:tb-rl;writing-mode:vertical-rl;direction:ltr;unicode-bidi:normal;', [directions.bottom, directions.left]],
		['-ms-writing-mode:tb-lr;writing-mode:vertical-lr;direction:ltr;unicode-bidi:normal;', [directions.bottom, directions.right]],
		['direction:rtl;unicode-bidi:bidi-override;', [directions.left, directions.bottom]],
	]
	.forEach(([style, expectedDirection]) => {

		it(`should return ${expectedDirection.join(',')} as its direction`, function () {
			const element = new N({
				a: [
					['style', `white-space:pre;${style}`],
				],
			});
			element.setParent(document.body);
			assert.deepEqual(element.textDirection, expectedDirection);
			element.remove();
		});

	});

});

describe('N.prototype.modifyRange', function () {

	(() => {
		const text = new N(
			[
				'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
				'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
				'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
				'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
				'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
			]
			.join('\n')
		);
		const charactersInLine = 27;
		const offset = charactersInLine * 2 + 10;

		[
			[
				'direction:ltr;unicode-bidi:normal;',
				'lr-tb',
				[
					['left', text, offset - 2, text, offset - 2],
					['right', text, offset + 2, text, offset + 2],
					['top', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['bottom', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'-ms-writing-mode:bt-rl;writing-mode:vertical-rl;direction:rtl;unicode-bidi:bidi-override;',
				'bt-rl',
				[
					['bottom', text, offset - 2, text, offset - 2],
					['top', text, offset + 2, text, offset + 2],
					['right', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['left', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'-ms-writing-mode:tb-rl;writing-mode:vertical-rl;direction:ltr;unicode-bidi:normal;',
				'tb-rl',
				[
					['top', text, offset - 2, text, offset - 2],
					['bottom', text, offset + 2, text, offset + 2],
					['right', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['left', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'-ms-writing-mode:tb-lr;writing-mode:vertical-lr;direction:ltr;unicode-bidi:normal;',
				'tb-lr',
				[
					['top', text, offset - 2, text, offset - 2],
					['bottom', text, offset + 2, text, offset + 2],
					['left', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['right', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'direction:rtl;unicode-bidi:bidi-override;',
				'rl-tb',
				[
					['right', text, offset - 2, text, offset - 2],
					['left', text, offset + 2, text, offset + 2],
					['top', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['bottom', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
		]
		.forEach(([style, textDirection, directions]) => {

			directions
			.forEach(([direction, expectedStartContainer, expectedStartOffset, expectedEndContainer, expectedEndOffset]) => {
				it(`Simple Text - ${textDirection} - move to ${direction} twice`, function () {
					const element = new N({
						a: [
							['style', `${commonStyle}${style}`],
							['contenteditable', 'true'],
						],
						c: [text]
					});
					element.setParent(document.body);
					const range = document.createRange();
					range.setStart(text.node, offset);
					range.setEnd(text.node, offset);
					element.modifyRange(range, 'move', direction);
					element.modifyRange(range, 'move', direction);
					const {
						startContainer,
						startOffset,
						endContainer,
						endOffset,
					} = range;
					element.remove();
					assert.equal(startContainer === expectedStartContainer.node, true, 'startContainer error');
					assert.equal(startOffset, expectedStartOffset, 'startOffset error');
					assert.equal(endContainer === expectedEndContainer.node, true, 'endContainer error');
					assert.equal(endOffset, expectedEndOffset, 'endOffset error');
				});
			});

		});
	})();

	(() => {
		const text1 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		const text2 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		const text3 = new N('ABCDEFGHI');
		const text4 = new N('JK');
		const text5 = new N('LMNOPQRSTUVWXYZ');
		const text6 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		const text7 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

		[
			[
				'-ms-writing-mode:bt-rl;writing-mode:vertical-rl;direction:rtl;unicode-bidi:bidi-override;',
				'bt-rl',
				[
					['top', text5, 1, text5, 1],
					['bottom', text3, 8, text3, 8],
					['right', text1, 10, text1, 10],
					['left', text7, 10, text7, 10],
				],
			],
			[
				'direction:ltr;unicode-bidi:normal;',
				'lr-tb',
				[
					['right', text5, 1, text5, 1],
					['left', text3, 8, text3, 8],
					['top', text1, 10, text1, 10],
					['bottom', text7, 10, text7, 10],
				],
			],
			[
				'-ms-writing-mode:tb-rl;writing-mode:vertical-rl;direction:ltr;unicode-bidi:normal;',
				'tb-rl',
				[
					['bottom', text5, 1, text5, 1],
					['top', text3, 8, text3, 8],
					['right', text1, 10, text1, 10],
					['left', text7, 10, text7, 10],
				],
			],
			[
				'-ms-writing-mode:tb-lr;writing-mode:vertical-lr;direction:ltr;unicode-bidi:normal;',
				'tb-lr',
				[
					['bottom', text5, 1, text5, 1],
					['top', text3, 8, text3, 8],
					['left', text1, 10, text1, 10],
					['right', text7, 10, text7, 10],
				],
			],
			[
				'direction:rtl;unicode-bidi:bidi-override;',
				'rl-tb',
				[
					['left', text5, 1, text5, 1],
					['right', text3, 8, text3, 8],
					['top', text1, 10, text1, 10],
					['bottom', text7, 10, text7, 10],
				],
			],
		]
		.forEach(([style, textDirection, directions]) => {

			directions
			.forEach(([direction, expectedStartContainer, expectedStartOffset, expectedEndContainer, expectedEndOffset]) => {
				it(`Nested Elements - ${textDirection} - move to ${direction} twice`, function () {
					const inlineStyle = 'display:inline;';
					const br = {t: 'br'};
					const element = new N({
						a: [
							['style', `${commonStyle}${style}`],
							['contenteditable', 'true'],
						],
						c: [
							{
								a: [
									['style', inlineStyle],
								],
								c: [
									text1,
									br,
									{
										a: [
											['style', inlineStyle],
										],
										c: [
											text2,
										],
									}
								],
							},
							br,
							{
								a: [
									['style', inlineStyle],
								],
								c: [
									text3,
								],
							},
							text4,
							{
								a: [
									['style', inlineStyle],
								],
								c: [
									text5,
									br,
									{
										a: [
											['style', inlineStyle],
										],
										c: [
											text6,
										],
									}
								],
							},
							br,
							text7,
						]
					});
					element.setParent(document.body);
					const range = document.createRange();
					range.setStart(text4.node, 1);
					range.setEnd(text4.node, 1);
					element.modifyRange(range, 'move', direction);
					element.modifyRange(range, 'move', direction);
					const {
						startContainer,
						startOffset,
						endContainer,
						endOffset,
					} = range;
					element.remove();
					assert.equal(startContainer === expectedStartContainer.node, true, 'startContainer error');
					assert.equal(startOffset, expectedStartOffset, 'startOffset error');
					assert.equal(endContainer === expectedEndContainer.node, true, 'endContainer error');
					assert.equal(endOffset, expectedEndOffset, 'endOffset error');
				});
			});

		});
	})();

	(() => {
		const text1 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		const text2 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		const text3 = new N('ABCDEFGHI');
		const text4 = new N('JK');
		const text5 = new N('LMNOPQRSTUVWXYZ');
		const text6 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		const text7 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

		[
			[
				'-ms-writing-mode:bt-rl;writing-mode:vertical-rl;direction:rtl;unicode-bidi:bidi-override;',
				'bt-rl',
				[
					['top', 69, 'range:last'],
					['bottom', 63, 'range:first'],
					['right', 3, 'range:firstline'],
					['left', 3, 'range:lastline'],
				],
			],
			[
				'direction:ltr;unicode-bidi:normal;',
				'lr-tb',
				[
					['right', 69, 'range:last'],
					['left', 63, 'range:first'],
					['top', 3, 'range:firstline'],
					['bottom', 3, 'range:lastline'],
				],
			],
			[
				'-ms-writing-mode:tb-rl;writing-mode:vertical-rl;direction:ltr;unicode-bidi:normal;',
				'tb-rl',
				[
					['bottom', 69, 'range:last'],
					['top', 63, 'range:first'],
					['right', 3, 'range:firstline'],
					['left', 3, 'range:lastline'],
				],
			],
			[
				'-ms-writing-mode:tb-lr;writing-mode:vertical-lr;direction:ltr;unicode-bidi:normal;',
				'tb-lr',
				[
					['bottom', 69, 'range:last'],
					['top', 63, 'range:first'],
					['left', 3, 'range:firstline'],
					['right', 3, 'range:lastline'],
				],
			],
			[
				'direction:rtl;unicode-bidi:bidi-override;',
				'rl-tb',
				[
					['left', 69, 'range:last'],
					['right', 63, 'range:first'],
					['top', 3, 'range:firstline'],
					['bottom', 3, 'range:lastline'],
				],
			],
		]
		.forEach(([style, textDirection, directions]) => {

			directions
			.forEach(([direction, times, eventName]) => {
				it(`Nested Elements - ${textDirection} - move to ${direction} for ${times} times and emit a "${eventName}" event`, function () {
					const inlineStyle = 'display:inline;';
					const br = {t: 'br'};
					const called = [];
					const element = new N({
						a: [
							['style', `${commonStyle}${style}`],
							['contenteditable', 'true'],
						],
						c: [
							{
								a: [
									['style', inlineStyle],
								],
								c: [
									text1,
									br,
									{
										a: [
											['style', inlineStyle],
										],
										c: [
											text2,
										],
									}
								],
							},
							br,
							{
								a: [
									['style', inlineStyle],
								],
								c: [
									text3,
								],
							},
							text4,
							{
								a: [
									['style', inlineStyle],
								],
								c: [
									text5,
									br,
									{
										a: [
											['style', inlineStyle],
										],
										c: [
											text6,
										],
									}
								],
							},
							br,
							text7,
						],
						e: [
							['range:last', function () {
								called.push('range:last');
							}],
							['range:first', function () {
								called.push('range:first');
							}],
							['range:lastline', function () {
								called.push('range:lastline');
							}],
							['range:firstline', function () {
								called.push('range:firstline');
							}],
						],
					})
					.setParent(document.body);
					const range = document.createRange();
					range.setStart(text4.node, 1);
					range.setEnd(text4.node, 1);
					for (let i = 0; i < times; i++) {
						element.modifyRange(range, 'move', direction);
					}
					element.remove();
					assert.equal(called.join(','), eventName);
				});
			});

		});
	})();

});

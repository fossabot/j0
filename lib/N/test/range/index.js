import {
	N,
	document,
	browser,
} from 'j0';

const directions = N.directions;
const commonStyle = [
	'position:fixed;',
	'left:0;',
	'right:0;',
	'bottom:0;',
	'opacity:0.6;',
	'font-family:Courier,monospace;',
	'white-space:pre;',
	'pointer-events:none;',
].join('');

function compileCSS(...declarations) {
	return declarations
	.map((declaration) => {
		return `${declaration.join(':')};`;
	})
	.join('')
}

const styles = {
	lrtb: compileCSS(
		['direction', 'ltr'],
		['unicode-bidi', 'normal'],
	),
	rltb: compileCSS(
		['direction', 'rtl'],
		['unicode-bidi', 'bidi-override'],
	),
	tbrl: compileCSS(
		['-ms-writing-mode', 'tb-rl'],
		['-webkit-writing-mode', 'vertical-rl'],
		['writing-mode', 'vertical-rl'],
		['direction', 'ltr'],
		['unicode-bidi', 'normal'],
	),
	tblr: compileCSS(
		['-ms-writing-mode', 'tb-lr'],
		['-webkit-writing-mode', 'vertical-lr'],
		['writing-mode', 'vertical-lr'],
		['direction', 'ltr'],
		['unicode-bidi', 'normal'],
	),
	btrl: compileCSS(
		['-ms-writing-mode', 'bt-rl'],
		['-webkit-writing-mode', 'vertical-rl'],
		['writing-mode', 'vertical-rl'],
		['direction', 'rtl'],
		['unicode-bidi', 'bidi-override'],
	),
	btlr: compileCSS(
		['-ms-writing-mode', 'bt-lr'],
		['-webkit-writing-mode', 'vertical-lr'],
		['writing-mode', 'vertical-lr'],
		['direction', 'rtl'],
		['unicode-bidi', 'bidi-override'],
	),
};

describe('N.prototype.textDirection', function () {

	[
		[
			styles.lrtb,
			[directions.right, directions.bottom]
		],
		[
			styles.rltb,
			[directions.left, directions.bottom]
		],
		[
			styles.tbrl,
			[directions.bottom, directions.left]
		],
		[
			styles.tblr,
			[directions.bottom, directions.right]
		],
		[
			styles.btrl,
			[directions.top, directions.left]
		],
		[
			styles.btlr,
			[directions.top, directions.right]
		],
	]
	.forEach(([style, expectedDirection]) => {

		it(`should return ${expectedDirection.join(',')} as its direction`, function () {
			const element = new N({
				a: [
					['style', `${commonStyle}${style}`],
				],
			});
			element.setParent(document.body);
			assert.deepEqual(element.textDirection, expectedDirection);
			element.remove();
		});

	});

});

describe('N.prototype.modifyRange', function () {

	if(browser.name === 'firefox') {
		return;
	}

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
				'lrtb',
				[
					['left', text, offset - 2, text, offset - 2],
					['right', text, offset + 2, text, offset + 2],
					['top', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['bottom', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'rltb',
				[
					['right', text, offset - 2, text, offset - 2],
					['left', text, offset + 2, text, offset + 2],
					['top', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['bottom', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'tbrl',
				[
					['top', text, offset - 2, text, offset - 2],
					['bottom', text, offset + 2, text, offset + 2],
					['right', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['left', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'tblr',
				[
					['top', text, offset - 2, text, offset - 2],
					['bottom', text, offset + 2, text, offset + 2],
					['left', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['right', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'btrl',
				[
					['bottom', text, offset - 2, text, offset - 2],
					['top', text, offset + 2, text, offset + 2],
					['right', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['left', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
			[
				'btlr',
				[
					['bottom', text, offset - 2, text, offset - 2],
					['top', text, offset + 2, text, offset + 2],
					['left', text, offset - charactersInLine * 2, text, offset - charactersInLine * 2],
					['right', text, offset + charactersInLine * 2, text, offset + charactersInLine * 2],
				],
			],
		]
		.forEach(([textDirection, directions]) => {

			directions
			.forEach(([direction, expectedStartContainer, expectedStartOffset, expectedEndContainer, expectedEndOffset]) => {

				const title = `Simple Text - ${textDirection} - move to ${direction} twice`;

				if (!textDirection) {
					it(`skipped ${title}`, () => {});
				}

				it(title, function () {
					const element = new N({
						a: [
							['style', `${commonStyle}${styles[textDirection]}`],
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
				'lrtb',
				[
					['right', text5, 1, text5, 1],
					['left', text3, 8, text3, 8],
					['top', text1, 10, text1, 10],
					['bottom', text7, 10, text7, 10],
				],
			],
			[
				'rltb',
				[
					['left', text5, 1, text5, 1],
					['right', text3, 8, text3, 8],
					['top', text1, 10, text1, 10],
					['bottom', text7, 10, text7, 10],
				],
			],
			[
				'tbrl',
				[
					['bottom', text5, 1, text5, 1],
					['top', text3, 8, text3, 8],
					['right', text1, 10, text1, 10],
					['left', text7, 10, text7, 10],
				],
			],
			[
				'tblr',
				[
					['bottom', text5, 1, text5, 1],
					['top', text3, 8, text3, 8],
					['left', text1, 10, text1, 10],
					['right', text7, 10, text7, 10],
				],
			],
			[
				'btrl',
				[
					['top', text5, 1, text5, 1],
					['bottom', text3, 8, text3, 8],
					['right', text1, 10, text1, 10],
					['left', text7, 10, text7, 10],
				],
			],
			[
				'btlr',
				[
					['top', text5, 1, text5, 1],
					['bottom', text3, 8, text3, 8],
					['left', text1, 10, text1, 10],
					['right', text7, 10, text7, 10],
				],
			],
		]
		.forEach(([textDirection, directions]) => {

			directions
			.forEach(([direction, expectedStartContainer, expectedStartOffset, expectedEndContainer, expectedEndOffset]) => {

				const title = `Nested Elements - ${textDirection} - move to ${direction} twice`;

				if (!textDirection) {
					it(`skipped ${title}`, () => {});
				}

				it(title, function () {
					const inlineStyle = 'display:inline;';
					const br = {t: 'br'};
					const element = new N({
						a: [
							['style', `${commonStyle}${styles[textDirection]}`],
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
				'lrtb',
				[
					['right', 69, 'range:last'],
					['left', 63, 'range:first'],
					['top', 3, 'range:firstline'],
					['bottom', 3, 'range:lastline'],
				],
			],
			[
				'rltb',
				[
					['left', 69, 'range:last'],
					['right', 63, 'range:first'],
					['top', 3, 'range:firstline'],
					['bottom', 3, 'range:lastline'],
				],
			],
			[
				'tbrl',
				[
					['bottom', 69, 'range:last'],
					['top', 63, 'range:first'],
					['right', 3, 'range:firstline'],
					['left', 3, 'range:lastline'],
				],
			],
			[
				'tblr',
				[
					['bottom', 69, 'range:last'],
					['top', 63, 'range:first'],
					['left', 3, 'range:firstline'],
					['right', 3, 'range:lastline'],
				],
			],
			[
				'btrl',
				[
					['top', 69, 'range:last'],
					['bottom', 63, 'range:first'],
					['right', 3, 'range:firstline'],
					['left', 3, 'range:lastline'],
				],
			],
			[
				'btlr',
				[
					['top', 69, 'range:last'],
					['bottom', 63, 'range:first'],
					['left', 3, 'range:firstline'],
					['right', 3, 'range:lastline'],
				],
			],
		]
		.forEach(([textDirection, directions]) => {

			directions
			.forEach(([direction, times, eventName]) => {

				const title = `Nested Elements - ${textDirection} - move to ${direction} for ${times} times and emit a "${eventName}" event`;

				if (!textDirection) {
					it(`skipped ${title}`, () => {});
				}

				it(title, function () {
					const inlineStyle = 'display:inline;';
					const br = {t: 'br'};
					const called = [];
					const element = new N({
						a: [
							['style', `${commonStyle}${styles[textDirection]}`],
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

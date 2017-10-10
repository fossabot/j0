import {
	N,
	document,
	browser,
} from 'j0';

function compileCSS(...declarations) {
	return declarations
	.map((declaration) => {
		return `${declaration.join(':')};`;
	})
	.join('');
}

function checkRange(actual, expected, message) {
	const errors = [];
	[
		'startContainer',
		'startOffset',
		'endContainer',
		'endOffset',
	]
	.forEach((key) => {
		if (actual[key] !== expected[key]) {
			errors.push(`${key}: ${actual[key]} !== ${expected[key]}`);
		}
	});
	if (0 < errors.length) {
		throw new Error(`${message ? `${message} ` : ''}{${errors.join(', ')}}`);
	}
}

function testRange(data, init, fn) {
	const element = new N(data);
	element.setParent(document.body);
	try {
		const range = document.createRange();
		range.setStart(init.startContainer, init.startOffset);
		range.setEnd(init.endContainer, init.endOffset);
		fn(element, range);
	} catch (error) {
		element.remove();
		throw error;
	}
	element.remove();
}

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

function forEachDirections(fn) {
	[
		[
			'lrtb',
			compileCSS(
				['direction', 'ltr'],
				['unicode-bidi', 'normal'],
			),
			['mainB', 'mainF', 'crossB', 'crossF'],
			[directions.right, directions.bottom],
		],
		[
			'rltb',
			compileCSS(
				['direction', 'rtl'],
				['unicode-bidi', 'bidi-override'],
			),
			['mainF', 'mainB', 'crossB', 'crossF'],
			[directions.left, directions.bottom],
		],
		[
			'tbrl',
			compileCSS(
				['-ms-writing-mode', 'tb-rl'],
				['-webkit-writing-mode', 'vertical-rl'],
				['writing-mode', 'vertical-rl'],
				['direction', 'ltr'],
				['unicode-bidi', 'normal'],
			),
			['crossF', 'crossB', 'mainB', 'mainF'],
			[directions.bottom, directions.left],
		],
		[
			'tblr',
			compileCSS(
				['-ms-writing-mode', 'tb-lr'],
				['-webkit-writing-mode', 'vertical-lr'],
				['writing-mode', 'vertical-lr'],
				['direction', 'ltr'],
				['unicode-bidi', 'normal'],
			),
			['crossB', 'crossF', 'mainB', 'mainF'],
			[directions.bottom, directions.right],
		],
		[
			'btrl',
			compileCSS(
				['-ms-writing-mode', 'bt-rl'],
				['-webkit-writing-mode', 'vertical-rl'],
				['writing-mode', 'vertical-rl'],
				['direction', 'rtl'],
				['unicode-bidi', 'bidi-override'],
			),
			['crossF', 'crossB', 'mainF', 'mainB'],
			[directions.top, directions.left],
		],
		[
			'btlr',
			compileCSS(
				['-ms-writing-mode', 'bt-lr'],
				['-webkit-writing-mode', 'vertical-lr'],
				['writing-mode', 'vertical-lr'],
				['direction', 'rtl'],
				['unicode-bidi', 'bidi-override'],
			),
			['crossB', 'crossF', 'mainF', 'mainB'],
			[directions.top, directions.right],
		],
	]
	.forEach(([textDirectionType, style, visualDirections, calculatedDirection]) => {
		fn(
			textDirectionType,
			style,
			visualDirections
			.map((visualDirection, index) => {
				return [
					['left', 'right', 'top', 'bottom'][index],
					visualDirection,
				];
			}),
			calculatedDirection,
		);
	});
}

describe('N.prototype.textDirection', function () {

	forEachDirections((textDirectionType, style, visualDirections, calculatedDirection) => {
		it(`${textDirectionType} should return ${calculatedDirection.join(',')} as its direction`, function () {
			const element = new N({
				a: [
					['style', `${commonStyle}${style}`],
				],
			});
			element.setParent(document.body);
			assert.deepEqual(element.textDirection, calculatedDirection);
			element.remove();
		});
	});

});

describe('N.prototype.modifyRange', function () {

	forEachDirections((textDirectionType, style, visualDirections) => {

		describe(`N.prototype.modifyRange - ${textDirectionType}`, function () {

			if(browser.name === 'firefox') {
				it('skipped: Firefox', function () {});
				return;
			}

			visualDirections
			.forEach(([visualDirection, textDirection]) => {

				describe(`N.prototype.modifyRange - ${textDirectionType} - ${visualDirection}`, function () {
					const text1 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
					const text2 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
					const text3 = new N('ABCDEFGHI');
					const text4 = new N('JK');
					const text5 = new N('LMNOPQRSTUVWXYZ');
					const text6 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
					const text7 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
					const inlineStyle = 'display:inline;';
					const br = {t: 'br'};
					const data = {
						a: [
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
					};
					const init = {
						startContainer: text4.node,
						startOffset: 1,
						endContainer: text4.node,
						endOffset: 1,
					};
					const [times, eventName] = {
						mainF: [69, 'range:last'],
						mainB: [63, 'range:first'],
						crossF: [3, 'range:lastline'],
						crossB: [3, 'range:firstline'],
					}[textDirection];

					it(`Simple Text - ${textDirectionType} - move to ${visualDirection} twice`, function () {
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
						testRange(
							{
								a: [
									['style', `${commonStyle}${style}`],
									['contenteditable', 'true'],
								],
								c: [text]
							},
							{
								startContainer: text.node,
								startOffset: 64,
								endContainer: text.node,
								endOffset: 64,
							},
							(element, range) => {
								element.modifyRange(range, 'move', visualDirection);
								element.modifyRange(range, 'move', visualDirection);
								checkRange(
									range,
									{
										mainF: {
											startContainer: text.node,
											startOffset: 64 + 2,
											endContainer: text.node,
											endOffset: 64 + 2,
										},
										mainB: {
											startContainer: text.node,
											startOffset: 64 - 2,
											endContainer: text.node,
											endOffset: 64 - 2,
										},
										crossF: {
											startContainer: text.node,
											startOffset: 64 + 27 * 2,
											endContainer: text.node,
											endOffset: 64 + 27 * 2,
										},
										crossB: {
											startContainer: text.node,
											startOffset: 64 - 27 * 2,
											endContainer: text.node,
											endOffset: 64 - 27 * 2,
										},
									}[textDirection]
								);
							},
						);
					});

					it(`Nested Elements - ${textDirectionType} - move to ${visualDirection} twice`, function () {
						testRange(
							data,
							init,
							(element, range) => {
								element.setAttribute('style', `${commonStyle}${style}`);
								element.modifyRange(range, 'move', visualDirection);
								element.modifyRange(range, 'move', visualDirection);
								checkRange(
									range,
									{
										mainB: {
											startContainer: text3.node,
											startOffset: 8,
											endContainer: text3.node,
											endOffset: 8,
										},
										mainF: {
											startContainer: text5.node,
											startOffset: 1,
											endContainer: text5.node,
											endOffset: 1,
										},
										crossB: {
											startContainer: text1.node,
											startOffset: 10,
											endContainer: text1.node,
											endOffset: 10,
										},
										crossF: {
											startContainer: text7.node,
											startOffset: 10,
											endContainer: text7.node,
											endOffset: 10,
										},
									}[textDirection]
								);
							},
						);
					});

					it(`Nested Elements - ${textDirectionType} - move to ${visualDirection} for ${times} times and emit one "${eventName}" event`, function () {
						testRange(
							data,
							init,
							(element, range) => {
								const called = [];
								element
								.on('range:last', function () {
									called.push('range:last');
								})
								.on('range:first', function () {
									called.push('range:first');
								})
								.on('range:lastline', function () {
									called.push('range:lastline');
								})
								.on('range:firstline', function () {
									called.push('range:firstline');
								})
								.setAttribute('style', `${commonStyle}${style}`);
								for (let i = 0; i < times; i++) {
									element.modifyRange(range, 'move', visualDirection);
								}
								assert.equal(called.join(','), eventName);
							},
						);
					});

					const crossTestText = new N(
						[
							'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
							'iMlN',
							'NlMiZlXi',
							'ABCDEFGHIJKLMNOPQ',
						]
						.join('\n')
					);

					switch (textDirection) {
					case 'crossF':
						it(`should modify ranges to ${visualDirection} at edge - ${textDirectionType}:${visualDirection}`, function () {
							testRange(
								{
									a: [
										['style', `${commonStyle}${style}`],
										['contenteditable', 'true'],
									],
									c: [crossTestText],
								},
								{
									startContainer: crossTestText.node,
									startOffset: 0,
									endContainer: crossTestText.node,
									endOffset: 0,
								},
								(element, range) => {
									const called = [];
									element
									.on('range:last', function () {
										called.push('range:last');
									})
									.on('range:first', function () {
										called.push('range:first');
									})
									.on('range:lastline', function () {
										called.push('range:lastline');
									})
									.on('range:firstline', function () {
										called.push('range:firstline');
									})
									.setAttribute('style', `${commonStyle}${style}`);

									element.modifyRange(range, 'move', visualDirection);
									checkRange(
										range,
										{
											startContainer: crossTestText.node,
											startOffset: 27,
											endContainer: crossTestText.node,
											endOffset: 27,
										},
										'1st modification',
									);
									assert.equal(called.length, 0, `1st modification: expected ${called.length} to equal 0`);

									element.modifyRange(range, 'move', visualDirection);
									checkRange(
										range,
										{
											startContainer: crossTestText.node,
											startOffset: 32,
											endContainer: crossTestText.node,
											endOffset: 32,
										},
										'2nd modification',
									);
									assert.equal(called.length, 0, `2nd modification: expected ${called.length} to equal 0`);

									element.modifyRange(range, 'move', visualDirection);
									checkRange(
										range,
										{
											startContainer: crossTestText.node,
											startOffset: 41,
											endContainer: crossTestText.node,
											endOffset: 41,
										},
										'3rd modification',
									);
									assert.equal(called.length, 0, `3rd modification: expected ${called.length} to equal 0`);

									element.modifyRange(range, 'move', visualDirection);
									checkRange(
										range,
										{
											startContainer: crossTestText.node,
											startOffset: 58,
											endContainer: crossTestText.node,
											endOffset: 58,
										},
										'4th modification',
									);
									assert.equal(called[0], 'range:lastline', `4th modification: expected ${called[0]} to equal 'range:lastline'`);
								},
							);
						});
						break;
					case 'crossB':
						break;
					}

				});
			});
		});
	});

});

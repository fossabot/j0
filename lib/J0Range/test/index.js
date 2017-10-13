import {
	N,
	document,
	J0Range,
} from 'j0';
import forEachDirections from './forEachDirections';
import checkRange from './checkRange';
import bb from './bb';
import collapsed from './collapsed';
import clone from './clone';
import forwardEnd from './forwardEnd';
import backwardStart from './backwardStart';
import modify from './modify';
import diff from './diff';

forEachDirections(function (textDirectionType, style, visualDirections) {

	describe(`J0Range on ${textDirectionType}`, function () {

		beforeEach(function () {
			delete checkRange.prefix;
			const ctx = this.test.ctx;
			const textNode0 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ1\n').node;
			const textNode1 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ2\n').node;
			const textNode2 = new N('iiiiii\n').node;
			const textNode3 = new N('0\n').node;
			const textNode4 = new N('MMMMMM\n').node;
			const textNode5 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ3').node;
			const inlineStyle = 'display:inline;';
			const events = ctx.events = [];
			const element = ctx.element = new N({
				a: [
					['style', `pointer-events:none;white-space:pre;${style}`],
					['contenteditable', 'true'],
				],
				c: [
					textNode0,
					textNode1,
					{
						a: [
							['style', `${inlineStyle}font-weight:bold;`],
						],
						c: [textNode2],
					},
					textNode3,
					{
						a: [
							['style', `${inlineStyle}color:red;`],
						],
						c: [
							textNode4,
							{
								a: [
									['style', `${inlineStyle}text-decoration:line-through;`],
								],
								c: [textNode5],
							},
						],
					}
				],
				e: [
					['range:first', function () {
						events.push('range:first');
					}],
					['range:last', function () {
						events.push('range:last');
					}],
					['range:firstline', function () {
						events.push('range:firstline');
					}],
					['range:lastline', function () {
						events.push('range:lastline');
					}],
				],
			});
			element.setParent(document.body);
			ctx.firstTextNode = textNode0;
			ctx.lastTextNode = textNode5;
			ctx.textNodes = [
				textNode0,
				textNode1,
				textNode2,
				textNode3,
				textNode4,
				textNode5,
			];
			if (this.debug) {
				this.element.node.focus();
			}
		});

		afterEach(function () {
			this.element.remove();
		});

		it(`[${textDirectionType}] should create a J0Range from nothing`, function () {
			assert.doesNotThrow(() => {
				return new J0Range();
			});
		});

		it(`[${textDirectionType}] should create a J0Range from range`, function () {
			const range = document.createRange();
			range.setStart(this.firstTextNode, 0);
			range.setEnd(this.firstTextNode, 0);
			assert.doesNotThrow(() => {
				return new J0Range(range);
			});
		});

		[
			bb,
			collapsed,
			clone,
			forwardEnd,
			backwardStart,
			modify,
			diff,
		]
		.forEach((fn) => {
			fn.call(this, textDirectionType, visualDirections);
		});

	});

});

import {
	N,
	document,
	J0Range,
} from 'j0';
import forEachDirections from './forEachDirections';
import bb from './bb';
import collapsed from './collapsed';
import clone from './clone';
import forwardEnd from './forwardEnd';
import backwardStart from './backwardStart';
import modify from './modify';

forEachDirections(function (textDirectionType, style, visualDirections) {

	describe(`J0Range on ${textDirectionType}`, function () {

		beforeEach(function () {
			const textNode = this.test.ctx.textNode = document.createTextNode('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
			const element = this.test.ctx.element = new N({
				a: [
					['style', `pointer-events:none;position:fixed;left:10px;right:10px;top:10px:bottom:10px;${style}`],
				],
				c: [textNode],
			});
			element.setParent(document.body);
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
			range.setStart(this.textNode, 0);
			range.setEnd(this.textNode, 0);
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
		]
		.forEach((fn) => {
			fn.call(this, textDirectionType, visualDirections);
		});

	});

});

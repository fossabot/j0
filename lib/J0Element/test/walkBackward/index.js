import {
	dom
} from 'j0';

describe('J0Element.prototype.walkBackward', function () {

	it('should walk backward', function () {
		const text1 = dom(`text1--${Date.now()}`);
		const text2 = dom(`text2--${Date.now()}`);
		const text3 = dom(`text3--${Date.now()}`);
		const text4 = dom(`text4--${Date.now()}`);
		const text5 = dom(`text5--${Date.now()}`);
		const text6 = dom(`text6--${Date.now()}`);
		const text7 = dom(`text7--${Date.now()}`);
		const text8 = dom(`text8--${Date.now()}`);
		const text9 = dom(`text9--${Date.now()}`);
		const text10 = dom(`text10--${Date.now()}`);
		const element1 = dom({
			c: [text2]
		});
		const element2 = dom({
			c: [text3]
		});
		const element3 = dom({
			c: [text4, element2, text5]
		});
		const element4 = dom({
			c: [text6]
		});
		const element5 = dom({
			c: [text7, element4, text8]
		});
		const element6 = dom({
			c: [text9, element5, text10]
		});
		dom({
			c: [
				text1,
				element1,
				element3,
				element6
			]
		});
		const actual = [];
		text10.walkBackward((node) => {
			actual.push(node);
		});
		const expected = [
			text10,
			element5,
			text8,
			element4,
			text6,
			text7,
			text9,
			element3,
			text5,
			element2,
			text3,
			text4,
			element1,
			text2,
			text1
		];
		assert.equal(actual.length, expected.length);
		actual
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true, `Failed at ${index}`);
		});
	});

	it('should stop walking if a given function returns a truthy value', function () {
		const text1 = dom(`text1--${Date.now()}`);
		const text2 = dom(`text2--${Date.now()}`);
		const text3 = dom(`text3--${Date.now()}`);
		const text4 = dom(`text4--${Date.now()}`);
		const text5 = dom(`text5--${Date.now()}`);
		const text6 = dom(`text6--${Date.now()}`);
		const text7 = dom(`text7--${Date.now()}`);
		const text8 = dom(`text8--${Date.now()}`);
		const text9 = dom(`text9--${Date.now()}`);
		const text10 = dom(`text10--${Date.now()}`);
		const element1 = dom({
			c: [text2]
		});
		const element2 = dom({
			c: [text3]
		});
		const element3 = dom({
			c: [text4, element2, text5]
		});
		const element4 = dom({
			c: [text6]
		});
		const element5 = dom({
			c: [text7, element4, text8]
		});
		const element6 = dom({
			c: [text9, element5, text10]
		});
		dom({
			c: [
				text1,
				element1,
				element3,
				element6
			]
		});
		const actual = [];
		element5.walkBackward((node) => {
			if (node.equals(text9)) {
				return true;
			}
			actual.push(node);
		});
		const expected = [
			element5,
			text8,
			element4,
			text6,
			text7
		];
		assert.equal(actual.length, expected.length);
		actual
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true, `Failed at ${index}`);
		});
	});

});

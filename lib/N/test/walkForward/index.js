import {
	N
} from 'j0';

describe('N.prototype.walkForward', function () {

	it('should walk forward', function () {
		const text1 = new N(`text1--${Date.now()}`);
		const text2 = new N(`text2--${Date.now()}`);
		const text3 = new N(`text3--${Date.now()}`);
		const text4 = new N(`text4--${Date.now()}`);
		const text5 = new N(`text5--${Date.now()}`);
		const text6 = new N(`text6--${Date.now()}`);
		const text7 = new N(`text7--${Date.now()}`);
		const text8 = new N(`text8--${Date.now()}`);
		const text9 = new N(`text9--${Date.now()}`);
		const text10 = new N(`text10--${Date.now()}`);
		const element1 = new N({
			c: [text2]
		});
		const element2 = new N({
			c: [text3]
		});
		const element3 = new N({
			c: [text4, element2, text5]
		});
		const element4 = new N({
			c: [text6]
		});
		const element5 = new N({
			c: [text7, element4, text8]
		});
		const element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [
				text1,
				element1,
				element3,
				element6
			]
		});
		const actual = [];
		element1.walkForward((node) => {
			actual.push(node);
		});
		const expected = [
			text2,
			element3,
			text4,
			element2,
			text3,
			text5,
			element6,
			text9,
			element5,
			text7,
			element4,
			text6,
			text8,
			text10
		];
		assert.equal(actual.length, expected.length);
		actual
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true, `Failed at ${index}`);
		});
	});

	it('should walk forward and stop at limit', function () {
		const text1 = new N(`text1--${Date.now()}`);
		const text2 = new N(`text2--${Date.now()}`);
		const text3 = new N(`text3--${Date.now()}`);
		const text4 = new N(`text4--${Date.now()}`);
		const text5 = new N(`text5--${Date.now()}`);
		const text6 = new N(`text6--${Date.now()}`);
		const text7 = new N(`text7--${Date.now()}`);
		const text8 = new N(`text8--${Date.now()}`);
		const text9 = new N(`text9--${Date.now()}`);
		const text10 = new N(`text10--${Date.now()}`);
		const element1 = new N({
			c: [text2]
		});
		const element2 = new N({
			c: [text3]
		});
		const element3 = new N({
			c: [text4, element2, text5]
		});
		const element4 = new N({
			c: [text6]
		});
		const element5 = new N({
			c: [text7, element4, text8]
		});
		const element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [
				text1,
				element1,
				element3,
				element6
			]
		});
		const actual = [];
		element1.walkForward((node) => {
			actual.push(node);
		}, element6);
		const expected = [
			text2,
			element3,
			text4,
			element2,
			text3,
			text5,
			element6,
		];
		assert.equal(actual.length, expected.length);
		actual
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true, `Failed at ${index}`);
		});
	});

	it('should stop walking if a given function returns a truthy value', function () {
		const text1 = new N(`text1--${Date.now()}`);
		const text2 = new N(`text2--${Date.now()}`);
		const text3 = new N(`text3--${Date.now()}`);
		const text4 = new N(`text4--${Date.now()}`);
		const text5 = new N(`text5--${Date.now()}`);
		const text6 = new N(`text6--${Date.now()}`);
		const text7 = new N(`text7--${Date.now()}`);
		const text8 = new N(`text8--${Date.now()}`);
		const text9 = new N(`text9--${Date.now()}`);
		const text10 = new N(`text10--${Date.now()}`);
		const element1 = new N({
			c: [text2]
		});
		const element2 = new N({
			c: [text3]
		});
		const element3 = new N({
			c: [text4, element2, text5]
		});
		const element4 = new N({
			c: [text6]
		});
		const element5 = new N({
			c: [text7, element4, text8]
		});
		const element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [
				text1,
				element1,
				element3,
				element6
			]
		});
		const actual = [];
		element3.walkForward((node) => {
			if (node.equals(text9)) {
				return true;
			}
			actual.push(node);
		});
		const expected = [
			text4,
			element2,
			text3,
			text5,
			element6
		];
		assert.equal(actual.length, expected.length);
		actual
		.forEach((node, index) => {
			assert.equal(node.equals(expected[index]), true, `Failed at ${index}`);
		});
	});

});

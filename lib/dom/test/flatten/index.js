import dom from '../../index.js';

describe('J0Element.prototype.flatten', function () {

	it('should concatenate text nodes', function () {
		const text1 = `text1-${Date.now()}`;
		const text2 = `text2-${Date.now()}`;
		const text3 = `text3-${Date.now()}`;
		const element = dom({
			c: [
				text1,
				text2,
				text3
			]
		});
		element.flatten();
		const actual = element.toObject();
		const expected = {
			c: [`${text1}${text2}${text3}`]
		};
		assert.deepEqual(actual, expected);
	});

	it('should flatten element nodes', function () {
		const text1 = `text1-${Date.now()}`;
		const text2 = `text2-${Date.now()}`;
		const text3 = `text3-${Date.now()}`;
		const element = dom({
			c: [
				text1,
				{
					c: [
						text2,
						{
							c: [text3]
						}
					]
				}
			]
		});
		element.flatten();
		const actual = element.toObject();
		const expected = {
			c: [`${text1}${text2}${text3}`]
		};
		assert.deepEqual(actual, expected);
	});

	it('should keep inline elements', function () {
		const text1 = `text1-${Date.now()}`;
		const text2 = `text2-${Date.now()}`;
		const text3 = `text3-${Date.now()}`;
		const text4 = `text4-${Date.now()}`;
		const text5 = `text5-${Date.now()}`;
		const text6 = `text6-${Date.now()}`;
		const text7 = `text7-${Date.now()}`;
		const element = dom({
			c: [
				text1,
				{
					t: 'a',
					a: [
						['href', 'https://kei-ito.github.io/j0/']
					],
					c: [
						text2,
						{
							c: [text3]
						}
					]
				},
				{
					t: 's',
					c: [text4]
				},
				{
					t: 's',
					c: [
						text5,
						{
							t: 'b',
							c: [text6]
						},
						{
							t: 'b',
							c: [text7]
						}
					]
				}
			]
		});
		element.flatten();
		const actual = element.toObject();
		const expected = {
			c: [
				text1,
				{
					t: 'a',
					a: [
						['href', 'https://kei-ito.github.io/j0/']
					],
					c: [`${text2}${text3}`]
				},
				{
					t: 's',
					c: [
						`${text4}${text5}`,
						{
							t: 'b',
							c: [
								`${text6}${text7}`
							]
						}
					]
				}
			]
		};
		console.log(JSON.stringify(actual, null, 2));
		assert.deepEqual(actual, expected);
	});

});

import {
	N,
} from 'j0';

describe('N.prototype.normalize', function () {

	it('should normalize an element', function () {
		const text1 = `text1${Date.now()}`;
		const text2 = `text2${Date.now()}`;
		const text3 = `text3${Date.now()}`;
		const text4 = `text4${Date.now()}`;
		const text5 = `text5${Date.now()}`;
		const text6 = `text6${Date.now()}`;
		const data = {
			c: [
				'',
				text1,
				text2,
				{
					c: [
						text3,
						'',
						text4
					]
				},
				text5,
				text6
			]
		};
		const element = new N(data);
		assert.deepEqual(element.toObject(), data);
		element.normalize();
		const expected = {
			c: [
				`${text1}${text2}`,
				{
					c: [
						`${text3}${text4}`,
					]
				},
				`${text5}${text6}`
			]
		};
		assert.deepEqual(element.toObject(), expected);
	});

});

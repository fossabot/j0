import cloneNode from '..';
import createElement from '../../createElement';
import getTextContent from '../../getTextContent';
describe('cloneNode', function () {

	it('should clone a node', function () {
		const element = createElement({
			c: [
				'a',
				{
					c: [
						'b',
						{
							c: ['c']
						}
					]
				}
			]
		});
		assert.equal(getTextContent(cloneNode(element)), '');
	});

	it('should clone a node deeply', function () {
		const element = createElement({
			c: [
				'a',
				{
					c: [
						'b',
						{
							c: ['c']
						}
					]
				}
			]
		});
		assert.equal(getTextContent(cloneNode(element, true)), 'abc');
	});

});

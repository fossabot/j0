import getTextContent from '..';
import createElement from '../../createElement';

describe('dom/getTextContent', function () {

	it('should return textContent', function () {
		const element = createElement({
			c: [
				'h',
				{
					c: [
						'e',
						{
							c: [
								'l',
								{
									c: [
										'l',
										{
											c: ['o']
										}
									]
								}
							]
						}
					]
				}
			]
		});
		assert.equal(getTextContent(element), 'hello');
	});

});

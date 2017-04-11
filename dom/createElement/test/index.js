import createElement from '..';

describe('dom/createElement', function () {

	it('should create a <div>', function () {
		const element = createElement();
		assert.equal(element.tagName.toLowerCase(), 'div');
	});

});

import {
	dom
} from 'j0';

describe('J0Element.prototype.bb', function () {

	it('should get a bounding box', function () {
		const element = dom();
		dom(document.body).append(element);
		const {left, top} = element.bb;
		assert.equal(0 <= left, true);
		assert.equal(0 <= top, true);
		element.remove();
	});

});

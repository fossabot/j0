import {
	N,
	document,
} from 'j0';

describe('N.prototype.bb', function () {

	it('should get a bounding box', function () {
		const element = new N();
		new N(document.body).append(element);
		const {left, top} = element.bb;
		assert.equal(0 <= left, true);
		assert.equal(0 <= top, true);
		element.remove();
	});

});

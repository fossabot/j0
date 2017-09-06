import './*/index.js';
import N from '..';

describe('N', function () {

	it('should copy an element', function () {
		class E1 extends N {}
		class E2 extends E1 {}
		const e1 = new E2();
		const e2 = new E2(e1);
		assert(e1.equals(e2));
	});

});

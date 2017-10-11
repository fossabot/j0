import {
	J0Range,
} from 'j0';

function test_bb(textDirectionType, visualDirections, calculatedDirection) {

	describe(`[${textDirectionType}] J0Range.prototype.bb`, function () {

		it(`[${textDirectionType}] should create a J0Range`, function () {
			const range = new J0Range();
			range.set(this.textNode, 0);
			const bb = range.bb;
			assert(0 < bb.left);
			assert(0 < bb.top);
		});

	});

}

export default test_bb;

import {
	J0Range,
} from 'j0';

function test_collapsed(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.collapsed`, function () {

		it(`[${textDirectionType}] should return true`, function () {
			const range = new J0Range();
			range.set(this.firstTextNode, 0);
			assert.equal(range.collapsed, true);
		});

		it(`[${textDirectionType}] should return false`, function () {
			const range = new J0Range();
			range.set(this.firstTextNode, 0, this.firstTextNode, 1);
			assert.equal(range.collapsed, false);
		});

	});

}

export default test_collapsed;

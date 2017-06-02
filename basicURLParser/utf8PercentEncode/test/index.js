import {CharRegExp} from 'j0';
import utf8PercentEncode from '..';

describe('basicURLParser/utf8PercentEncode', function () {

	it('should encode @', function () {
		const set = new CharRegExp(/@/);
		const source = 'abc@ def';
		const expected = 'abc%40 def';
		assert.equal(utf8PercentEncode(source, set), expected);
	});

	it('should encode @ and SPACE', function () {
		const set = new CharRegExp(/@ /);
		const source = 'abc@ def';
		const expected = 'abc%40%20def';
		assert.equal(utf8PercentEncode(source, set), expected);
	});

});

import {stringToCodePoints} from 'j0';
import percentDecode from '..';
import utf8DecodeWithoutBOM from '../../utf8DecodeWithoutBOM';
describe('basicURLParser/percentDecode', function () {

	it('should decode "@"', function () {
		const src = 'abc%40 def';
		const actual = percentDecode(stringToCodePoints(src));
		const expected = stringToCodePoints('abc@ def');
		assert.deepEqual(actual, expected);
	});

	it('should decode "@ "', function () {
		const src = 'abc%40%20def';
		const actual = percentDecode(stringToCodePoints(src));
		const expected = stringToCodePoints('abc@ def');
		assert.deepEqual(actual, expected);
	});

	it('should decode "こんにちは"', function () {
		const src = '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF';
		const actual = utf8DecodeWithoutBOM(percentDecode(stringToCodePoints(src)));
		const expected = stringToCodePoints('こんにちは');
		assert.deepEqual(actual, expected);
	});

});

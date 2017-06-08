import {
	ConditionalSet,
	stringToCodePoints
} from 'j0';
import utf8PercentEncode from '..';

function hex(arr) {
	return String.fromCodePoint(...arr);
}

describe('basicURLParser/utf8PercentEncode', function () {

	it('should encode @', function () {
		const set = ConditionalSet.solo(function (x) {
			return x === ('@').codePointAt(0);
		});
		const source = 'abc@ def';
		const expected = stringToCodePoints('abc%40 def');
		const actual = [].concat(
			...stringToCodePoints(source)
			.map((codePoint) => {
				return utf8PercentEncode(codePoint, set);
			})
		);
		assert.deepEqual(actual, expected);
	});

	it('should encode @ and SPACE', function () {
		const set = ConditionalSet.or(
			function (x) {
				return x === ('@').codePointAt(0);
			},
			function (x) {
				return x === (' ').codePointAt(0);
			}
		);
		const source = 'abc@ def';
		const expected = stringToCodePoints('abc%40%20def');
		const actual = [].concat(
			...stringToCodePoints(source)
			.map((codePoint) => {
				return utf8PercentEncode(codePoint, set);
			})
		);
		assert.deepEqual(actual, expected);
	});

});

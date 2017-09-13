import {
	N,
	Date,
} from 'j0';

function test(forEach, name = 'DOMTokenList.prototype.forEach') {

	describe(name, function () {

		it('should iterate over classList', function () {
			const class1 = `1_${Date.now()}`;
			const class2 = `2_${Date.now()}`;
			const class3 = `3_${Date.now()}`;
			const element = new N({
				a: [
					['class', class1, class2, class3],
				],
			});
			const actual = [];
			const {classList} = element;
			classList
			.forEach((...args) => {
				actual.push(args);
			});
			const expected = [
				[class1, 0, classList],
				[class2, 1, classList],
				[class3, 2, classList],
			];
			assert.deepEqual(actual, expected);
		});

	});

}

export default test;

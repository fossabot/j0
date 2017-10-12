import {
	J0Range,
} from 'j0';

function test_diff(textDirectionType) {

	describe(`[${textDirectionType}] J0Range.prototype.diff`, function () {

		[false, true]
		.forEach((startContainer) => {
			[false, true]
			.forEach((startOffset) => {
				[false, true]
				.forEach((endContainer) => {
					[false, true]
					.forEach((endOffset) => {
						const expected = [];
						if (startContainer) {
							expected.push('startContainer');
						}
						if (startOffset) {
							expected.push('startOffset');
						}
						if (endContainer) {
							expected.push('endContainer');
						}
						if (endOffset) {
							expected.push('endOffset');
						}
						it(`should return ${JSON.stringify(expected)}`, function () {
							const range = new J0Range();
							range.set(this.firstTextNode, 0);
							const actual = range.diff(
								startContainer ? null : range.startContainer,
								startOffset ? null : range.startOffset,
								endContainer ? null : range.endContainer,
								endOffset ? null : range.endOffset
							);
							assert.deepEqual(actual, expected);
						});
					});
				});
			});
		});

	});

}

export default test_diff;

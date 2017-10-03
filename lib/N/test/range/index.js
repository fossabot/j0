import {
	N,
	document,
} from 'j0';

const directions = N.directions;

const styles = [
	['-ms-writing-mode:bt-rl;writing-mode:vertical-rl;direction:rtl;unicode-bidi:bidi-override;', [directions.top, directions.left]],
	['direction:ltr;unicode-bidi:normal;', [directions.right, directions.bottom]],
	['-ms-writing-mode:tb-rl;writing-mode:vertical-rl;direction:ltr;unicode-bidi:normal;', [directions.bottom, directions.left]],
	['-ms-writing-mode:tb-lr;writing-mode:vertical-lr;direction:ltr;unicode-bidi:normal;', [directions.bottom, directions.right]],
	['direction:rtl;unicode-bidi:bidi-override;', [directions.left, directions.bottom]],
];

describe('N.prototype.textDirection', function () {

	styles
	.forEach(([style, expectedDirection]) => {

		it(`should return ${expectedDirection.join(',')} as its direction`, function () {
			const element = new N({
				a: [
					['style', `white-space:pre;${style}`],
				],
			});
			element.setParent(document.body);
			assert.deepEqual(element.textDirection, expectedDirection);
			element.remove();
		});

	});

});

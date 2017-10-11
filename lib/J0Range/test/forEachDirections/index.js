function forEachDirections(fn, thisArg) {
	[
		[
			'lrtb',
			[
				['direction', 'ltr'],
				['unicode-bidi', 'normal'],
			],
			['mainB', 'mainF', 'crossB', 'crossF'],
			['right', 'bottom'],
		],
		[
			'rltb',
			[
				['direction', 'rtl'],
				['unicode-bidi', 'bidi-override'],
			],
			['mainF', 'mainB', 'crossB', 'crossF'],
			['left', 'bottom'],
		],
		[
			'tbrl',
			[
				['-ms-writing-mode', 'tb-rl'],
				['-webkit-writing-mode', 'vertical-rl'],
				['writing-mode', 'vertical-rl'],
				['direction', 'ltr'],
				['unicode-bidi', 'normal'],
			],
			['crossF', 'crossB', 'mainB', 'mainF'],
			['bottom', 'left'],
		],
		[
			'tblr',
			[
				['-ms-writing-mode', 'tb-lr'],
				['-webkit-writing-mode', 'vertical-lr'],
				['writing-mode', 'vertical-lr'],
				['direction', 'ltr'],
				['unicode-bidi', 'normal'],
			],
			['crossB', 'crossF', 'mainB', 'mainF'],
			['bottom', 'right'],
		],
		[
			'btrl',
			[
				['-ms-writing-mode', 'bt-rl'],
				['-webkit-writing-mode', 'vertical-rl'],
				['writing-mode', 'vertical-rl'],
				['direction', 'rtl'],
				['unicode-bidi', 'bidi-override'],
			],
			['crossF', 'crossB', 'mainF', 'mainB'],
			['top', 'left'],
		],
		[
			'btlr',
			[
				['-ms-writing-mode', 'bt-lr'],
				['-webkit-writing-mode', 'vertical-lr'],
				['writing-mode', 'vertical-lr'],
				['direction', 'rtl'],
				['unicode-bidi', 'bidi-override'],
			],
			['crossB', 'crossF', 'mainF', 'mainB'],
			['top', 'right'],
		],
	]
	.forEach(([textDirectionType, styleDeclarations, visualDirections, calculatedDirection]) => {
		fn.call(
			thisArg,
			textDirectionType,
			styleDeclarations
			.map((declaration) => {
				return `${declaration.join(':')};`;
			})
			.join(''),
			visualDirections
			.map((visualDirection, index) => {
				return [
					['left', 'right', 'top', 'bottom'][index],
					visualDirection,
				];
			}),
			calculatedDirection,
		);
	});
}

export default forEachDirections;

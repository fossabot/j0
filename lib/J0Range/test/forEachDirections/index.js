function forEachDirections(fn, thisArg) {
	[
		[
			'lrtb',
			[
				['direction', 'ltr'],
				['unicode-bidi', 'normal'],
			],
			['mainB', 'mainF', 'crossB', 'crossF'],
		],
		[
			'rltb',
			[
				['direction', 'rtl'],
				['unicode-bidi', 'bidi-override'],
			],
			['mainF', 'mainB', 'crossB', 'crossF'],
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
		],
	]
	.forEach(([textDirectionType, styleDeclarations, visualDirections]) => {
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
		);
	});
}

export default forEachDirections;

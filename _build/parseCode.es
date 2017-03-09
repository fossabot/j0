const acorn = require('acorn');
const BlockParser = require('./BlockParser.es');
const HEX = 16;

function parseCode(code) {
	const parser = new BlockParser();
	let pos = 0;
	acorn.parse(code, {
		ecmaVersion: 7,
		sourceType: 'module',
		onToken: function ({type, start, end}) {
			if (start === end) {
				return;
			}
			const label = type.label.replace(/[^\w]/g, function (char) {
				return `_${char.charCodeAt(0).toString(HEX)}`;
			});
			parser.push('code', code.slice(pos, start));
			parser.push('code', `<span class="${label}">${code.slice(start, end)}</span>`);
			pos = end;
		},
		onComment: function (block, text, start, end) {
			if (!block) {
				parser.push('doc', text);
				pos = end;
			}
		}
	});
	return parser.result;
}

module.exports = parseCode;

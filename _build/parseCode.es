const acorn = require('acorn');
const trim = require('j1/trim');
const HEX = 16;

function parseCode(code) {
	const result = [];
	let pos = 0;
	let buffer = [];
	let mode = null;
	function push(type, string) {
		if (!mode) {
			mode = type;
			buffer = [];
		} else if (mode !== type) {
			const block = {body: trim(buffer.join(''))};
			block[mode] = {body: block.body};
			result.push(block);
			mode = type;
			buffer = [];
		}
		if (string) {
			buffer.push(string);
		}
	}
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
			push('code', code.slice(pos, start));
			push('code', `<span class="${label}">${code.slice(start, end)}</span>`);
			pos = end;
		},
		onComment: function (block, text, start, end) {
			if (!block) {
				push('doc', text);
				pos = end;
			}
		}
	});
	push();
	return result.filter(({body}) => {
		return 0 < body.length;
	});
}

module.exports = parseCode;

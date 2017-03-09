const marked = require('marked');
const trim = require('j1/trim');

function formatBody(mode, string) {
	let body = trim(string);
	if (0 < body.length) {
		switch (mode) {
		case 'doc':
			body = marked(body);
			break;
		default:
		}
		body = trim(body);
	}
	return body;
}

class BlockParser {

	constructor() {
		this.mode = null;
		this.blocks = [];
	}

	push(type, string) {
		if (!this.mode) {
			this.buffer = [];
		} else if (this.mode !== type) {
			const body = formatBody(this.mode, this.buffer.join(''));
			const block = {length: body.length};
			block[this.mode] = {body: body};
			this.blocks.push(block);
			this.buffer = [];
		}
		this.mode = type;
		if (string) {
			this.buffer.push(string);
		}
	}

	get result() {
		this.push();
		return this.blocks.filter(({length}) => {
			return 0 < length;
		});
	}

}

module.exports = BlockParser;

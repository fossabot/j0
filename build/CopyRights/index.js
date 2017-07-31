class CopyRights extends Array {

	get lastIndex() {
		return this.length - 1;
	}

	addLast(text, end) {
		this[this.lastIndex] += `${text}\n`;
		this.checkIndex = end;
	}

	checkComment(block, text, start, end) {
		if (0 < text.trim().length) {
			if (block) {
				if ((/copyright/i).test(text)) {
					this.push(text);
				}
				delete this.checkIndex;
			} else if ((/copyright/i).test(text)) {
				this.push('');
				this.addLast(text, end);
			} else if (this.checkIndex === start - 1) {
				this.addLast(text, end);
			}
		} else {
			delete this.checkIndex;
		}
	}

	toString() {
		return this
		.map((text) => {
			return `/*\n${
				text
				.replace(/^ *\n/, '')
				.replace(/^\s*\* *(\r\n|\r|\n)/, '')
				.replace(/\s*$/, '')
			}\n*/\n`;
		})
		.join('\n');
	}

}

module.exports = CopyRights;

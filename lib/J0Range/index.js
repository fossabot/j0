import {
	document,
	N,
} from 'j0';

class J0Range {

	constructor(range, container) {
		this.range = range || document.createRange();
		this.container = new N(container || new N(document.body));
	}

	clone() {
		return new J0Range(this.range.cloneRange(), this.container);
	}

	get collapsed() {
		return this.range.collapsed;
	}

	get startContainer() {
		return this.range.startContainer;
	}

	get startOffset() {
		return this.range.startOffset;
	}

	get endContainer() {
		return this.range.endContainer;
	}

	get endOffset() {
		return this.range.endOffset;
	}

	setStart(startContainer, startOffset) {
		this.range.setStart(startContainer, startOffset);
		return this;
	}

	setEnd(endContainer, endOffset) {
		this.range.setEnd(endContainer, endOffset);
		return this;
	}

	set(startContainer, startOffset = 0, endContainer = startContainer, endOffset = startOffset) {
		return this
		.setStart(startContainer, startOffset)
		.setEnd(endContainer, endOffset);
	}

	get _bb() {
		const rect = this.range.getBoundingClientRect();
		return {
			left: rect.left,
			right: rect.right,
			top: rect.top,
			bottom: rect.bottom,
			width: rect.width,
			height: rect.height,
		};
	}

	get bb() {
		const cloned = this.clone();
		if (cloned.collapsed) {
			if (cloned.forwardEnd()) {
				return cloned.getCollapsedBB(true);
			} else if (cloned.backwardStart()) {
				return cloned.getCollapsedBB(false);
			} else {
				const text = new N('A');
				cloned.container.append(text);
				cloned.range.selectNodeContents(text.node);
				const rect = cloned.getCollapsedBB(true);
				text.remove();
				return rect;
			}
		} else {
			return cloned._bb;
		}
	}

	getCollapsedBB(toStart) {
		const [mainDirection] = this.container.textDirection;
		const directions = N.directions;
		const bb = this._bb;
		switch (mainDirection) {
		case directions.right:
			bb.left = bb.right = toStart ? bb.left : bb.right;
			bb.width = 0;
			break;
		case directions.left:
			bb.left = bb.right = toStart ? bb.right : bb.left;
			bb.width = 0;
			break;
		case directions.bottom:
			bb.top = bb.bottom = toStart ? bb.top : bb.bottom;
			bb.height = 0;
			break;
		case directions.top:
			bb.top = bb.bottom = toStart ? bb.bottom : bb.top;
			bb.height = 0;
			break;
		}
		return bb;
	}

	forwardEnd() {
		try {
			this.setEnd(this.endContainer, this.endOffset + 1);
		} catch (error) {
			const nextText = new N(this.endContainer).getNextText(this.container);
			if (!nextText) {
				return false;
			}
			this.setEnd(nextText.node, 1);
		}
		return true;
	}

	backwardStart() {
		if (0 < this.startOffset) {
			this.setStart(this.startContainer, this.startOffset - 1);
		} else {
			const previousText = new N(this.startContainer).getPreviousText(this.container);
			if (!previousText) {
				return false;
			}
			const {endContainer, endOffset} = this;
			this.range.selectNodeContents(previousText.node);
			this.set(this.endContainer, this.endOffset - 1, endContainer, endOffset);
		}
		return true;
	}

}

export default J0Range;

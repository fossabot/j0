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

	get textDirection() {
		return this.container.textDirection;
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
		const [mainDirection] = this.textDirection;
		const bb = this._bb;
		switch (mainDirection) {
		case 'lr':
			bb.left = bb.right = toStart ? bb.left : bb.right;
			bb.width = 0;
			break;
		case 'rl':
			bb.left = bb.right = toStart ? bb.right : bb.left;
			bb.width = 0;
			break;
		case 'tb':
			bb.top = bb.bottom = toStart ? bb.top : bb.bottom;
			bb.height = 0;
			break;
		case 'bt':
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

	product(direction, crossDirection) {
		const textDirection = this.textDirection[crossDirection ? 1 : 0];
		if (textDirection.slice(-1) === direction[0]) {
			return 1;
		} else if (textDirection[0] === direction[0]) {
			return -1;
		}
		return 0;
	}

	modify(alter, direction) {
		const mainProduct = this.product(direction);
		if (mainProduct === 1) {
			if (!this.forwardEnd()) {
				this.container.emit('range:last');
			}
			if (alter === 'move') {
				this.range.collapse(false);
			}
		} else if (mainProduct === -1) {
			if (!this.backwardStart()) {
				this.container.emit('range:first');
			}
			if (alter === 'move') {
				this.range.collapse(true);
			}
		} else {
			const crossProduct = this.product(direction, true);
			if (crossProduct === 1) {
				this.forwardLine(direction);
			} else {
				this.backwardLine(direction);
			}
		}
		return this;
	}

	getTargetXY(direction, anchorBB = this.bb) {
		let x = anchorBB.left;
		let y = anchorBB.top;
		switch (direction) {
		case 'left':
			x += anchorBB.width;
			break;
		case 'right':
			x -= anchorBB.width;
			break;
		case 'bottom':
			y += anchorBB.height;
			break;
		case 'top':
			y -= anchorBB.height;
			break;
		}
		return {x, y};
	}

	forwardLine(direction) {
		const anchorBB = this.bb;
		const target = this.getTargetXY(direction, anchorBB);
	}

}

export default J0Range;

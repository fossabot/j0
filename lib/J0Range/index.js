import {
	document,
	N,
	getSelection,
	assign,
} from 'j0';

class J0Range {

	constructor(range, container) {
		this.range = range || document.createRange();
		this.container = new N(container || new N(document.body));
	}

	diff(startContainer, startOffset, endContainer = startContainer, endOffset = startOffset) {
		const result = [];
		if (startContainer !== this.startContainer) {
			result.push('startContainer');
		}
		if (startOffset !== this.startOffset) {
			result.push('startOffset');
		}
		if (endContainer !== this.endContainer) {
			result.push('endContainer');
		}
		if (endOffset !== this.endOffset) {
			result.push('endOffset');
		}
		return result;
	}

	equals({startContainer, startOffset, endContainer = startContainer, endOffset = startOffset}) {
		return this.diff(startContainer, startOffset, endContainer, endOffset).length === 0;
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

	get content() {
		return this.range.cloneContents();
	}

	get textContent() {
		return this.content.textContent;
	}

	apply() {
		const selection = getSelection();
		selection.removeAllRanges();
		selection.addRange(this.range);
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

	get isInSameNode() {
		return this.startContainer === this.endContainer;
	}

	get isLineBreak() {
		return /\r|\n/.test(this.startContainer.textContent[this.startOffset]);
	}

	get bb() {
		const cloned = this.clone();
		if (cloned.collapsed) {
			const {startContainer, startOffset, endContainer, endOffset} = cloned;
			while (cloned.forwardEnd()) {
				if (!cloned.isLineBreak) {
					return cloned.getCollapsedBB(true);
				}
			}
			cloned.set(startContainer, startOffset, endContainer, endOffset);
			while (cloned.backwardStart()) {
				return cloned.getCollapsedBB(false);
			}
			const text = new N('A');
			cloned.container.append(text);
			cloned.range.selectNodeContents(text.node);
			const rect = cloned.getCollapsedBB(true);
			text.remove();
			return rect;
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
			this.setEnd(nextText.node, 0);
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
			this.set(this.endContainer, this.endOffset, endContainer, endOffset);
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

	modify(alter, direction, anchorBB) {
		const mainProduct = this.product(direction);
		let forward;
		if (mainProduct === 1) {
			this.forwardChar();
			forward = true;
		} else if (mainProduct === -1) {
			this.backwardChar();
			forward = false;
		} else {
			const crossProduct = this.product(direction, true);
			if (crossProduct === 1) {
				this.forwardLine(direction, anchorBB);
				forward = true;
			} else {
				this.backwardLine(direction, anchorBB);
				forward = false;
			}
		}
		if (alter === 'move') {
			this.range.collapse(!forward);
		}
		return this;
	}

	forwardChar() {
		if (!this.forwardEnd()) {
			this.container.emit('range:last');
		}
	}

	backwardChar() {
		if (!this.backwardStart()) {
			this.container.emit('range:first');
		}
	}

	getXY(bb) {
		return {
			x: bb.left,
			y: bb.top,
		};
	}

	getTarget(direction, anchorBB = this.bb) {
		const xy = this.getXY(anchorBB);
		let d;
		switch (direction) {
		case 'left':
			d = anchorBB.width;
			xy.x -= d;
			break;
		case 'right':
			d = anchorBB.width;
			xy.x += d;
			break;
		case 'bottom':
			d = anchorBB.height;
			xy.y += d;
			break;
		case 'top':
			d = anchorBB.height;
			xy.y -= d;
			break;
		}
		xy.d = d;
		return xy;
	}

	getChecker(direction, forward, anchorBB = this.bb) {
		const {x: targetX, y: targetY, d: threshold} = this.getTarget(direction, anchorBB);
		const [mainDirection] = this.textDirection;
		const vertical = (/^[bt]/).test(mainDirection);
		const candidates = [];
		const candidates2 = [];
		let lastCandidate;
		const compare = (x, y, useStart) => {
			const dx = x - targetX;
			const dy = y - targetY;
			const d = Math.hypot(dx, dy);
			const crossD = Math.abs(vertical ? dx : dy);
			const candidate = useStart
			? [d, this.startContainer, this.startOffset, crossD]
			: [d, this.endContainer, this.endOffset, crossD];
			if (d < threshold) {
				candidates.push(candidate);
			} else if (lastCandidate && lastCandidate[3] !== crossD) {
				candidates2.push(forward ? lastCandidate : candidate);
			}
			lastCandidate = candidate;
		};
		let checkEnds;
		switch (mainDirection) {
		case 'lr':
			checkEnds = forward
			? (bb) => {
				compare(bb.left, bb.top, true);
				compare(bb.right, bb.top, false);
			}
			: (bb) => {
				compare(bb.right, bb.top, false);
				compare(bb.left, bb.top, true);
			};
			break;
		case 'rl':
			checkEnds = forward
			? (bb) => {
				compare(bb.right, bb.top, true);
				compare(bb.left, bb.top, false);
			}
			: (bb) => {
				compare(bb.left, bb.top, false);
				compare(bb.right, bb.top, true);
			};
			break;
		case 'tb':
			checkEnds = forward
			? (bb) => {
				compare(bb.left, bb.top, true);
				compare(bb.left, bb.bottom, false);
			}
			: (bb) => {
				compare(bb.left, bb.bottom, false);
				compare(bb.left, bb.top, true);
			};
			break;
		case 'bt':
			checkEnds = forward
			? (bb) => {
				compare(bb.left, bb.bottom, true);
				compare(bb.left, bb.top, false);
			}
			: (bb) => {
				compare(bb.left, bb.top, false);
				compare(bb.left, bb.bottom, true);
			};
			break;
		}
		function selectNearest(candidates) {
			return candidates
			.sort(([a], [b]) => {
				return a < b ? -1 : 1;
			})
			.shift()
			.slice(1, 3);
		}
		return assign(
			() => {
				const canditateCount = candidates.length;
				const bb = this._bb;
				if (0 < bb.width && 0 < bb.height) {
					checkEnds(bb);
					if (0 < canditateCount && canditateCount === candidates.length) {
						return selectNearest(candidates);
					} else if (1 < candidates2.length) {
						return selectNearest(candidates2);
					}
				}
			},
			{
				checkEnds,
				anchorBB,
				target: {
					x: targetX,
					y: targetY,
				},
				onEnd: () => {
					if (0 < candidates.length) {
						return selectNearest(candidates);
					}
				}
			}
		);
	}

	forwardLine(direction, anchorBB) {
		const cloned = this.clone();
		const check = cloned.getChecker(direction, true, anchorBB);
		while (1) {
			cloned.setStart(cloned.endContainer, cloned.endOffset);
			if (cloned.forwardEnd()) {
				if (cloned.isInSameNode && !cloned.isLineBreak) {
					const result = check();
					if (result) {
						this.setEnd(result[0], result[1]);
						return;
					}
				}
			} else {
				break;
			}
		}
		this.container.emit('range:lastline', check.anchorBB);
	}

	backwardLine(direction, anchorBB) {
		const cloned = this.clone();
		const check = cloned.getChecker(direction, false, anchorBB);
		while (1) {
			cloned.setEnd(cloned.startContainer, cloned.startOffset);
			if (cloned.backwardStart()) {
				if (cloned.isInSameNode && !cloned.isLineBreak) {
					const result = check();
					if (result) {
						this.setStart(result[0], result[1]);
						return;
					}
				}
			} else {
				break;
			}
		}
		const result = check.onEnd();
		if (result) {
			this.setStart(result[0], result[1]);
		} else {
			this.container.emit('range:firstline', check.anchorBB);
		}
	}

}

export default J0Range;

import {
	N,
} from 'j0';
import getComparer from '../getComparer';

function getDiffCalculator(mainDirection, forward, targetX, targetY) {
	const directions = N.directions;
	const compare = getComparer(targetX, targetY);
	switch (mainDirection) {
	case directions.left:
		return forward
		? (rect, range) => {
			// return compare(rect.right, rect.top, range.startContainer, range.startOffset) ||
			// compare(rect.left, rect.top, range.endContainer, range.endOffset);
			return compare(rect.left, rect.top, range.endContainer, range.endOffset);
		}
		: (rect, range) => {
			// return compare(rect.left, rect.top, range.endContainer, range.endOffset) ||
			// compare(rect.right, rect.top, range.startContainer, range.startOffset);
			return compare(rect.right, rect.top, range.startContainer, range.startOffset);
		};
	case directions.right:
		return forward
		? (rect, range) => {
			// return compare(rect.left, rect.top, range.startContainer, range.startOffset) ||
			// compare(rect.right, rect.top, range.endContainer, range.endOffset);
			return compare(rect.right, rect.top, range.endContainer, range.endOffset);
		}
		: (rect, range) => {
			// return compare(rect.right, rect.top, range.endContainer, range.endOffset) ||
			// compare(rect.left, rect.top, range.startContainer, range.startOffset);
			return compare(rect.left, rect.top, range.startContainer, range.startOffset);
		};
	case directions.top:
		return forward
		? (rect, range) => {
			// return compare(rect.left, rect.bottom, range.startContainer, range.startOffset) ||
			// compare(rect.left, rect.top, range.endContainer, range.endOffset);
			return compare(rect.left, rect.top, range.endContainer, range.endOffset);
		}
		: (rect, range) => {
			// return compare(rect.left, rect.top, range.endContainer, range.endOffset) ||
			// compare(rect.left, rect.bottom, range.startContainer, range.startOffset);
			return compare(rect.left, rect.bottom, range.startContainer, range.startOffset);
		};
	case directions.bottom:
		return forward
		? (rect, range) => {
			// return compare(rect.left, rect.top, range.startContainer, range.startOffset) ||
			// compare(rect.left, rect.bottom, range.endContainer, range.endOffset);
			return compare(rect.left, rect.bottom, range.endContainer, range.endOffset);
		}
		: (rect, range) => {
			// return compare(rect.left, rect.bottom, range.endContainer, range.endOffset) ||
			// compare(rect.left, rect.top, range.startContainer, range.startOffset);
			return compare(rect.left, rect.top, range.startContainer, range.startOffset);
		};
	}
}

export default getDiffCalculator;

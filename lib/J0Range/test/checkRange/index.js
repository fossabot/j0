import {
	isNumber,
} from 'j0';

function checkRange(range, startContainer, startOffset, endContainer = startContainer, endOffset = startOffset) {
	const prefix = checkRange.prefix || 'range:';
	assert(range.startContainer === startContainer, `${prefix} startContainer error`);
	if (isNumber(startOffset)) {
		assert.equal(range.startOffset, startOffset, `${prefix} startOffset error`);
	} else {
		assert(startOffset(range.startOffset), `${prefix} startOffset error`);
	}
	assert(range.endContainer === endContainer, `${prefix} endContainer error`);
	if (isNumber(endOffset)) {
		assert.equal(range.endOffset, endOffset, `${prefix} endOffset error`);
	} else {
		assert(endOffset(range.endOffset), `${prefix} endOffset error`);
	}
}

export default checkRange;

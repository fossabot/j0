function checkRange(range, startContainer, startOffset, endContainer = startContainer, endOffset = startOffset) {
	const prefix = checkRange.prefix || 'range:';
	assert(range.startContainer === startContainer, `${prefix} startContainer error`);
	assert.equal(range.startOffset, startOffset, `${prefix} startOffset error`);
	assert(range.endContainer === endContainer, `${prefix} endContainer error`);
	assert.equal(range.endOffset, endOffset, `${prefix} endOffset error`);
}

export default checkRange;

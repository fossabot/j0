function getComparer(targetX, targetY) {
	const previous = {};
	return function compare(x, y, container, offset) {
		const diff = Math.hypot(
			x - targetX,
			y - targetY,
		);
		console.log(`(${x.toFixed(0)}, ${y.toFixed(0)}) - (${targetX.toFixed(0)}, ${targetY.toFixed(0)}) = (${(x - targetX).toFixed(0)}, ${(y - targetY).toFixed(0)})`);
		if (previous.diff < diff) {
			return previous;
		} else {
			previous.diff = diff;
			previous.container = container;
			previous.offset = offset;
			return false;
		}
	}
}

export default getComparer;

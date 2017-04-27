function getBoundingClientRect(element) {
	const {
		left,
		top,
		width,
		height
	} = element.getBoundingClientRect();
	return {
		left,
		right: left + width,
		top,
		bottom: top + height,
		width,
		height,
		cx: left + width / 2,
		cy: top + height / 2
	};
}
export default getBoundingClientRect;

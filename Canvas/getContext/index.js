function getContext(canvas, contextType = '2d', contextAttributes) {
	return canvas.getContext(contextType, contextAttributes);
}
export default getContext;

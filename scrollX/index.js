import window from '../window';
function scrollX(element = window) {
	return element.scrollLeft || element.pageXOffset;
}
export default scrollX;

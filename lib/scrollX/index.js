import {window} from 'j0';
function scrollX(element = window) {
	return element.scrollLeft || element.pageXOffset || 0;
}
export default scrollX;

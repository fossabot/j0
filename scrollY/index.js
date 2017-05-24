import {window} from 'j0';
function scrollY(element = window) {
	return element.scrollTop || element.pageYOffset || 0;
}
export default scrollY;

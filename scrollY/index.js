import window from '../window';
function scrollY(element = window) {
	return element.scrollTop || element.pageYOffset || 0;
}
export default scrollY;

import window from '../window';
function scrollY(element = window) {
	return element.scrollTop || element.pageYOffset;
}
export default scrollY;

import window from '../../window';

function getScrollY(element) {
	return element ? element.scrollTop : window.scrollY;
}

export default getScrollY;

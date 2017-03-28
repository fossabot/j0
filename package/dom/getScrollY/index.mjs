import window from '../../window';

function getScrollY(element) {
	return element ? element.scrollTop : window.pageYOffset;
}

export default getScrollY;

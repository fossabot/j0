import window from '../window';
import clearTimeout from '../clearTimeout';
window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
	return clearTimeout(id);
};

import {window, clearTimeout} from '..';
window.cancelAnimationFrame =
	window.cancelAnimationFrame ||
	window.mozCancelAnimationFrame ||
	function (id) {
		return clearTimeout(id);
	};

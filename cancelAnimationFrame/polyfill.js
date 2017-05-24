import {
	window,
	clearTimeout
} from 'j0';
window.cancelAnimationFrame =
	window.cancelAnimationFrame ||
	window.mozCancelAnimationFrame ||
	function (id) {
		return clearTimeout(id);
	};

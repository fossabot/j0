import {window, clearTimeout} from '../global';
window.cancelAnimationFrame =
	window.cancelAnimationFrame ||
	window.mozCancelAnimationFrame ||
	function (id) {
		return clearTimeout(id);
	};

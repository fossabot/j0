function debounce(fn, delay = 0, thisArg) {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.call(thisArg || this, ...args);
		}, delay);
	};
}
export default debounce;

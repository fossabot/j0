function debounce(fn, delay = 0, thisArg = this) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.call(thisArg, ...args);
		}, delay);
	};
}
export default debounce;

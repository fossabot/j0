module.exports = (fn, delay) => {
	let timer;
	let thisArg;
	return function (...args) {
		thisArg = this;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.call(thisArg, ...args);
		}, delay);
	};
};

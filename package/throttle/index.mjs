import setTimeout from '../setTimeout';
import isUndefined from '../isUndefined';

function throttle(fn, interval = 0, context) {
	let lastArgs = [];
	let timer = null;
	let scheduled = false;
	function call(...args) {
		const thisArg = isUndefined(context) ? this : context;
		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = setTimeout(() => {
				timer = null;
				if (scheduled) {
					scheduled = null;
					call.apply(thisArg, lastArgs);
				}
			}, interval);
		}
	}
	return call;
}
export default throttle;

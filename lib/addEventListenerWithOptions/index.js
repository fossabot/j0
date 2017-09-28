import {
	addEventListener,
	Object,
} from 'j0';

function checkPassiveSupport() {
	let supportsPassive = false;
	try {
		addEventListener('test', null, Object.defineProperty({}, 'passive', {
			get() {
				supportsPassive = true;
			}
		}));
	} catch (e) {
		supportsPassive = false;
	}
	return supportsPassive;
}

export default checkPassiveSupport()
? function addEventListenerWithOptions(target, type, handler, options) {
	target.addEventListener(type, handler, options === true ? {capture: true} : options);
}
: function addEventListenerWithOptions(target, type, handler, options) {
	target.addEventListener(type, handler, options === true || (options && options.capture));
}

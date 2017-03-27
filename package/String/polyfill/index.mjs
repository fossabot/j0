import String from '..';
import polyfillRepeat from '../repeat/polyfill';

function polyfill() {
	if (!String.prototype.repeat) {
		String.prototype.repeat = polyfillRepeat;
	}
}

export default polyfill;

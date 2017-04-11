import String from '..';
import polyfillRepeat from '../repeat/polyfill';

if (!String.prototype.repeat) {
	String.prototype.repeat = polyfillRepeat;
}

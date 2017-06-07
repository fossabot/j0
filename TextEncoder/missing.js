import {window} from 'j0';
import J0TextEncoder from './j0polyfill';
if (!window.TextEncoder) {
	window.TextEncoder = J0TextEncoder;
}

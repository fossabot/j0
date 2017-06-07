import {window} from 'j0';
import J0TextDecoder from './j0polyfill';
if (!window.TextDecoder) {
	window.TextDecoder = J0TextDecoder;
}

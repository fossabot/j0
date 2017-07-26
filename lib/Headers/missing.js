import {window} from 'j0';
import J0Headers from './j0polyfill/index.js';

if (!window.Headers) {
	window.Headers = J0Headers;
}

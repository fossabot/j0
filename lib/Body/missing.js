import {window} from 'j0';
import J0Body from './j0polyfill/index.js';
if (!window.Body) {
	window.Body = J0Body;
}

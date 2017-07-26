import {window} from 'j0';
import J0Request from './j0polyfill/index.js';
if (!window.Request) {
	window.Request = J0Request;
}

import {window} from 'j0';
import J0Promise from './j0polyfill/index.js';
if (!window.Promise) {
	window.Promise = J0Promise;
}

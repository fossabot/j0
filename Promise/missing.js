import {window} from 'j0';
import J0Promise from './j0polyfill';
if (!window.Promise) {
	window.Promise = J0Promise;
}

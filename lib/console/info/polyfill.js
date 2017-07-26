import {
	console,
	isFunction
} from 'j0';
import j0info from './j0polyfill/index.js';

if (!isFunction(console.info)) {
	console.info = j0info;
}

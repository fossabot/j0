import {
	isFunction,
	CustomEvent,
	window
} from 'j0';
import J0CustomEvent from './j0polyfill/index.js';
if (!isFunction(CustomEvent)) {
	window.CustomEvent = J0CustomEvent;
}

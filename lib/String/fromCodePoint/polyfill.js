import {String} from 'j0';
import j0FromCodePoint from './j0polyfill/index.js';
if (!String.fromCodePoint) {
	String.fromCodePoint = j0FromCodePoint;
}

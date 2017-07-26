import {Array} from 'j0';
import j0ArrayOf from './j0polyfill/index.js';
if (!Array.of) {
	Array.of = j0ArrayOf;
}

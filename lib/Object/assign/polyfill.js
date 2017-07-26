import {Object} from 'j0';
import j0assign from './j0polyfill/index.js';
try {
	if (Object.assign({a: 1}, {a: 2}).a !== 2) {
		throw 0;
	}
} catch (e) {
	Object.assign = j0assign;
}

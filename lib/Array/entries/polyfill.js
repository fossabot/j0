import {Array} from 'j0';
import j0entries from './j0polyfill/index.js';
const {prototype} = Array;
try {
	if ([1].entries().next().value.join(',') !== '0,1') {
		throw 0;
	}
} catch (e) {
	prototype.entries = j0entries;
}

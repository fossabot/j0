import {Math} from 'j0';
import j0log2 from './j0polyfill/index.js';
if (!Math.log2) {
	Math.log2 = j0log2;
}

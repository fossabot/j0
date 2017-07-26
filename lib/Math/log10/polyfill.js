import {Math} from 'j0';
import j0log10 from './j0polyfill/index.js';
if (!Math.log10) {
	Math.log10 = j0log10;
}

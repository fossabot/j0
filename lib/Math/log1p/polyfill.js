import {Math} from 'j0';
import j0log1p from './j0polyfill/index.js';
if (!Math.log1p) {
	Math.log1p = j0log1p;
}

import {Math} from 'j0';
import j0trunc from './j0polyfill/index.js';
if (!Math.trunc) {
	Math.trunc = j0trunc;
}

import {Math} from 'j0';
import j0expm1 from './j0polyfill/index.js';
if (!Math.expm1) {
	Math.expm1 = j0expm1;
}

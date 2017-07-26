import {Math} from 'j0';
import j0cosh from './j0polyfill/index.js';
if (!Math.cosh) {
	Math.cosh = j0cosh;
}

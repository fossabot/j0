import {Math} from 'j0';
import j0acosh from './j0polyfill/index.js';
if (!Math.acosh) {
	Math.acosh = j0acosh;
}

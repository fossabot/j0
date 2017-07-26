import {Math} from 'j0';
import j0sign from './j0polyfill/index.js';
if (!Math.sign) {
	Math.sign = j0sign;
}

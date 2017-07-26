import {Math} from 'j0';
import j0atanh from './j0polyfill/index.js';
if (!Math.atanh) {
	Math.atanh = j0atanh;
}

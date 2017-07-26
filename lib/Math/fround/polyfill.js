import {Math} from 'j0';
import j0fround from './j0polyfill/index.js';
if (!Math.fround) {
	Math.fround = j0fround;
}

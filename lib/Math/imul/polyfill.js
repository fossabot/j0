import {Math} from 'j0';
import j0imul from './j0polyfill/index.js';
if (!Math.imul) {
	Math.imul = j0imul;
}

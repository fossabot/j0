import {Math} from 'j0';
import j0sinh from './j0polyfill/index.js';
if (!Math.sinh) {
	Math.sinh = j0sinh;
}

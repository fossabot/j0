import {Math} from 'j0';
import j0cbrt from './j0polyfill/index.js';
if (!Math.cbrt) {
	Math.cbrt = j0cbrt;
}

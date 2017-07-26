import {Math} from 'j0';
import j0hypot from './j0polyfill/index.js';
if (!Math.hypot) {
	Math.hypot = j0hypot;
}

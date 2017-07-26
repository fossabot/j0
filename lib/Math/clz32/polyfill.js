import {Math} from 'j0';
import j0clz32 from './j0polyfill/index.js';
if (!Math.clz32) {
	Math.clz32 = j0clz32;
}

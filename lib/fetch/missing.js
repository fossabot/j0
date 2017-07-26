import {window} from 'j0';
import j0fetch from './j0polyfill/index.js';
// if (!window.fetch) {
// 	window.fetch = j0fetch;
// }
window.fetch = j0fetch;

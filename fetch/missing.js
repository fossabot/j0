import {window} from 'j0';
import j0Fetch from './j0';
// if (!window.fetch) {
// 	window.fetch = j0Fetch;
// }
window.fetch = j0Fetch;

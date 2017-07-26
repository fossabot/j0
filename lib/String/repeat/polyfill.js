import {String} from 'j0';
import j0repeat from './j0polyfill/index.js';
const {prototype} = String;
try {
	'0'.repeat(1);
} catch (error) {
	prototype.repeat = j0repeat;
}

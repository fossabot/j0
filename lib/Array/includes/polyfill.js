import {Array} from 'j0';
import j0includes from './j0polyfill/index.js';
const {prototype} = Array;
if (!prototype.includes) {
	prototype.includes = j0includes;
}

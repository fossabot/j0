import {Array} from 'j0';
import j0fill from './j0polyfill/index.js';
const {prototype} = Array;
if (!prototype.fill) {
	prototype.fill = j0fill;
}

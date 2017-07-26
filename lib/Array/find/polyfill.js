import {Array} from 'j0';
import j0find from './j0polyfill/index.js';
const {prototype} = Array;
if (!prototype.find) {
	prototype.find = j0find;
}

import {Array} from 'j0';
import j0findIndex from './j0polyfill/index.js';
const {prototype} = Array;
if (!prototype.findIndex) {
	prototype.findIndex = j0findIndex;
}

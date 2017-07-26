import {Array} from 'j0';
import j0copyWithin from './j0polyfill/index.js';
const {prototype} = Array;
if (!prototype.copyWithin) {
	prototype.copyWithin = j0copyWithin;
}

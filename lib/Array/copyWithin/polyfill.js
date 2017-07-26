import {Array} from 'j0';
import j0copyWithin from './j0polyfill';
const {prototype} = Array;
if (!prototype.copyWithin) {
	prototype.copyWithin = j0copyWithin;
}

import {String} from 'j0';
import j0repeat from './j0polyfill';
const {prototype} = String;
if (!prototype.repeat) {
	prototype.repeat = j0repeat;
}

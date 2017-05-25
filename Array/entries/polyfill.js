import {Array} from 'j0';
import j0entries from './j0polyfill';
const {prototype} = Array;
if (!prototype.entries) {
	prototype.entries = j0entries;
}

import {Array} from 'j0';
import j0arrayFrom from './j0polyfill';
if (!Array.from) {
	Array.from = j0arrayFrom;
}

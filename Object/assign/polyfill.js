import {Object} from 'j0';
import j0assign from './j0polyfill';
if (!Object.assign) {
	Object.assign = j0assign;
}

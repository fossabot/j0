import {Math} from 'j0';
import j0atanh from './j0polyfill';
if (!Math.atanh) {
	Math.atanh = j0atanh;
}

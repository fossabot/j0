import {Math} from 'j0';
import j0asinh from './j0polyfill';
if (!Math.asinh) {
	Math.asinh = j0asinh;
}

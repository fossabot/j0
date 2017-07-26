import {Math} from 'j0';
import j0sign from './j0polyfill';
if (!Math.sign) {
	Math.sign = j0sign;
}

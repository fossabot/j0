import {Math} from 'j0';
import j0fround from './j0polyfill';
if (!Math.fround) {
	Math.fround = j0fround;
}

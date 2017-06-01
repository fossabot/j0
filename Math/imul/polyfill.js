import {Math} from 'j0';
import j0imul from './j0polyfill';
if (!Math.imul) {
	Math.imul = j0imul;
}

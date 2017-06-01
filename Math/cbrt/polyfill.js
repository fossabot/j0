import {Math} from 'j0';
import j0cbrt from './j0polyfill';
if (!Math.cbrt) {
	Math.cbrt = j0cbrt;
}

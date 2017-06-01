import {Math} from 'j0';
import j0tanh from './j0polyfill';
if (!Math.tanh) {
	Math.tanh = j0tanh;
}

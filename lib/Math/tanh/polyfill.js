import {Math} from 'j0';
import j0tanh from './j0polyfill/index.js';
if (!Math.tanh) {
	Math.tanh = j0tanh;
}

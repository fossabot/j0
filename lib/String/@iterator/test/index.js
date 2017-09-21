import '../*/test/index.js';
import test from '../tests.js';
import {
	Symbol,
	String,
} from 'j0';
test(String.prototype[Symbol.iterator]);

import {
	String,
	iteratorSymbol
} from 'j0';
import j0Generator from './j0polyfill/index.js';
const {prototype} = String;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = j0Generator;
}

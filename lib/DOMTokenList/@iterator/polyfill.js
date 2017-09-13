import {
	DOMTokenList,
	iteratorSymbol
} from 'j0';
import generator from './j0polyfill/index.js';
const {prototype} = DOMTokenList;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

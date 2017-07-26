import {
	HTMLCollection,
	iteratorSymbol
} from 'j0';
import generator from './j0polyfill/index.js';
const {prototype} = HTMLCollection;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

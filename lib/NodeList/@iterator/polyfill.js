import {
	iteratorSymbol,
	NodeList
} from 'j0';
import generator from './j0polyfill/index.js';
const {prototype} = NodeList;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

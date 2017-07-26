import {
	iteratorSymbol,
	NamedNodeMap
} from 'j0';
import generator from './j0polyfill/index.js';
const {prototype} = NamedNodeMap;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

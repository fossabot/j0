import {
	Map,
	iteratorSymbol
} from 'j0';
import generator from './j0polyfill/index.js';
const {prototype} = Map;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

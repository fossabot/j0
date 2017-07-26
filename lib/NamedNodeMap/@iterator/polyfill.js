import {
	iteratorSymbol,
	NamedNodeMap
} from 'j0';
import generator from './j0polyfill';
const {prototype} = NamedNodeMap;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

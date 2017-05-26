import {
	Map,
	iteratorSymbol
} from 'j0';
import generator from './j0polyfill';
const {prototype} = Map;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

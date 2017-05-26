import {
	Set,
	iteratorSymbol
} from 'j0';
import generator from './j0polyfill';
const {prototype} = Set;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

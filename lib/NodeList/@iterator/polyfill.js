import {
	iteratorSymbol,
	NodeList
} from 'j0';
import generator from './j0polyfill';
const {prototype} = NodeList;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

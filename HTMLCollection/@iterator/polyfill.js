import {
	HTMLCollection,
	iteratorSymbol
} from 'j0';
import generator from './j0';
const {prototype} = HTMLCollection;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

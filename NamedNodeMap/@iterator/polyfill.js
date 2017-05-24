import {
	iteratorSymbol,
	NamedNodeMap
} from 'j0';
import generator from '.';
const {prototype} = NamedNodeMap;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

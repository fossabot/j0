import {
	Map,
	iteratorSymbol
} from 'j0';
import generator from '.';
const {prototype} = Map;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

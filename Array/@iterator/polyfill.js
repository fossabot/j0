import {
	Array,
	iteratorSymbol
} from 'j0';
import generator from '.';
const {prototype} = Array;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

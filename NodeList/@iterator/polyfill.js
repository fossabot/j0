import {
	iteratorSymbol,
	NodeList
} from 'j0';
import generator from '.';
const {prototype} = NodeList;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

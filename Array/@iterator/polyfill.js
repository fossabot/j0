import {
	Array,
	iteratorSymbol
} from 'j0';
import j0Generator from './j0polyfill';
const {prototype} = Array;
if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = j0Generator;
}

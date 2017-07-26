import {
	Set,
	iteratorSymbol
} from 'j0';
import generator from './j0polyfill/index.js';
const {prototype} = Set;
try {
	if (new Set([1])[iteratorSymbol]().next().value !== 1) {
		throw 0;
	}
} catch (e) {
	prototype[iteratorSymbol] = generator;
}

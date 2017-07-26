import {
	Array,
	iteratorSymbol
} from 'j0';
import j0Generator from './j0polyfill/index.js';
const {prototype} = Array;
try {
	if ([1][iteratorSymbol]().next().value !== 1) {
		throw 0;
	}
} catch (e) {
	prototype[iteratorSymbol] = j0Generator;
}

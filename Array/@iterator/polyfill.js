import iteratorKey from '../../Symbol/iterator';
import generator from '.';
import {Array} from '../..';
const {prototype} = Array;
if (!prototype[iteratorKey]) {
	prototype[iteratorKey] = generator;
}

import iteratorKey from '../../Symbol/iterator';
import {HTMLCollection} from 'j0';
import generator from './j0';
if (!HTMLCollection.prototype[iteratorKey]) {
	HTMLCollection.prototype[iteratorKey] = generator;
}

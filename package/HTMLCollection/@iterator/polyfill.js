import iteratorKey from '../../Symbol/iterator';
import HTMLCollection from '..';
import generator from '.';
if (!HTMLCollection.prototype[iteratorKey]) {
	HTMLCollection.prototype[iteratorKey] = generator;
}

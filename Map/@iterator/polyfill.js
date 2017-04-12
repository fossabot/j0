import Map from '..';
import iteratorKey from '../../Symbol/iterator';
import generator from '.';

if (!Map.prototype[iteratorKey]) {
	Map.prototype[iteratorKey] = generator;
}

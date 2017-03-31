import iteratorKey from '../../Symbol/iterator';
import NamedNodeMap from '..';
import generator from '.';
if (NamedNodeMap.prototype[iteratorKey]) {
	NamedNodeMap.prototype[iteratorKey] = generator;
}

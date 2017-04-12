import iteratorKey from '../../Symbol/iterator';
import NodeList from '..';
import generator from '.';
if (!NodeList.prototype[iteratorKey]) {
	NodeList.prototype[iteratorKey] = generator;
}

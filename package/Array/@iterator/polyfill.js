import iteratorKey from '../../Symbol/iterator';
import generator from '.';
import Array from '..';
if (!Array.prototype[iteratorKey]) {
	Array.prototype[iteratorKey] = generator;
}

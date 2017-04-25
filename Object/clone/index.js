import parse from '../../JSON/parse';
import stringify from '../../JSON/stringify';
function clone(obj) {
	return parse(stringify(obj));
}
export default clone;

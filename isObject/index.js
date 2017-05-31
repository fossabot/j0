import {
	Object,
	isInstanceOf
} from 'j0';
function isObject(x) {
	return isInstanceOf(x, Object);
}
export default isObject;

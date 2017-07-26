import {JSON} from 'j0';
function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}
export default clone;

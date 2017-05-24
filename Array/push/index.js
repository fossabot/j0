import {Array} from 'j0';
const {push: arrayPush} = Array.prototype;
function push(arrayLike, ...args) {
	return arrayPush.apply(arrayLike, args);
}
export default push;

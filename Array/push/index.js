import {
	Array,
	Object as obj
} from 'j0';
import join from '../join';
console.log(obj, join);
const {push: arrayPush} = Array.prototype;
function push(arrayLike, ...args) {
	return arrayPush.apply(arrayLike, args);
}
export default push;

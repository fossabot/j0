import {isInstanceOf} from 'j0';

function isChildClassOf(A, B) {
	return isInstanceOf(A.prototype, B);
}

export default isChildClassOf;

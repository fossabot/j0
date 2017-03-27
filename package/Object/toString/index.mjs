import Object from '..';

function toString(o) {
	return Object.prototype.toString.call(o);
}

export default toString;

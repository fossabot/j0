import Array from '..';

function push(arrayLike, ...args) {
	return Array.prototype.push.call(arrayLike, ...args);
}

export default push;

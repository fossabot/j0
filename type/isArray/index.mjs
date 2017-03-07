// # isArray
// Check whether every arguments is an array or not.

const {isArray: _isArray} = Array;

function isArray(...args) {
	return args.every(_isArray);
}

export default isArray;

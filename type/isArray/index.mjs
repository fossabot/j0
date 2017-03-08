// # isArray
// Check whether every arguments is an array or not.

const {isArray: _isArray} = Array;

// @param {Number} args
function isArray(...args) {
	return args.every(_isArray);
}

export default isArray;

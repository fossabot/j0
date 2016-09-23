var defaultCoreFn = function (error) {
	/* global console */
	if (error) {
		console.error(error);
	}
};
var exports = module.exports = function (error) {
	coreFn(error);
};
var coreFn = exports.defaultFn = defaultCoreFn;
exports.set = function (fn) {
	if (!fn) {
		fn = defaultCoreFn;
	}
	coreFn = fn;
};

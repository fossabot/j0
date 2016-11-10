module.exports = function (canvasElement, contextType, contextAttributes) {
	if (!contextType) {
		contextType = '2d';
	}
	return canvasElement.getContext(contextType, contextAttributes);
};

(function (CanvasPrototype) {
	var dataURItoBlob;
	if (!CanvasPrototype.toBlob) {
		dataURItoBlob = require('./dataURIToBlob');
		CanvasPrototype.toBlob = function (callback, type, quality) {
			callback(dataURItoBlob(this.toDataURL(type, quality)));
		};
	}
})(HTMLCanvasElement.prototype);

var Node = require('./Node');
var ELEMENT_NODE = Node.ELEMENT_NODE;
module.exports = function (node) {
	return node instanceof Node && node.nodeType === ELEMENT_NODE;
};

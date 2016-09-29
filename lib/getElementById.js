var document = require('./document');
module.exports = function (id) {
	return document.getElementById(id);
};

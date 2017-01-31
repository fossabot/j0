var appendChild = require('../lib/appendChild');
var createElement = require('../lib/createElement');
var document = require('../lib/document');
var insertRuleSet = require('./insertRuleSet');
var styleSheet = appendChild(document.head, createElement({
	t: 'style'
})).sheet;

module.exports = function (ruleSets) {
	insertRuleSet(styleSheet, ruleSets);
};

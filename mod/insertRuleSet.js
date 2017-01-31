var forEach = require('../lib/forEach');
var unnestRuleSet = require('./unnestRuleSet');
var compileRuleSet = require('./compileRuleSet');

module.exports = function (styleSheet, ruleSets) {
	forEach(unnestRuleSet(ruleSets), function (flattenedRuleSet) {
		styleSheet.insertRule(compileRuleSet(flattenedRuleSet), 0);
	});
};

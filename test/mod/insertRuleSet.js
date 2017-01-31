var assert = require('assert');
var document = require('../../lib/document');
var map = require('../../lib/map');
var appendChild = require('../../lib/appendChild');
var createElement = require('../../lib/createElement');
var removeElement = require('../../lib/removeElement');
var insertRuleSet = require('../../mod/insertRuleSet');

describe('mod/insertRuleSet', function () {

	var style;
	var styleSheet;

	before(function () {
		style = appendChild(document.head, createElement({
			t: 'style'
		}));
		styleSheet = style.sheet;
	});

	after(function () {
		removeElement(style);
	});

	beforeEach(function () {
		while (0 < styleSheet.cssRules.length) {
			styleSheet.deleteRule(0);
		}
	});

	it('should insert nested rules', function () {
		insertRuleSet(styleSheet, ['body', [
			['color', 'red'],
			['>_1', [
				['color', 'blue']
			]]
		]]);
		assert.deepEqual(map(styleSheet.cssRules, function (rule) {
			return rule.cssText;
		}), [
			'body > ._1 { color: blue; }',
			'body { color: red; }'
		]);
	});

});

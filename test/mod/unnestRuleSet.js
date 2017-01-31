var assert = require('assert');
var unnestRuleSet = require('../../mod/unnestRuleSet');

describe('mod/unnestRuleSet', function () {

	it('should unnest the RuleSet', function () {
		var testee = [
			'body', [
				['color', 'red'],
				['h1', [
					['color', 'blue'],
					['&+h2', [
						['color', 'green']
					]]
				]],
				['&>p', [
					['margin', '0', 'auto']
				]]
			]
		];
		var actual = unnestRuleSet(testee);
		var expected = [
			['body', [
				['color', 'red']
			]],
			['body h1', [
				['color', 'blue']
			]],
			['body h1+h2', [
				['color', 'green']
			]],
			['body>p', [
				['margin', '0', 'auto']
			]]
		];
		assert.deepEqual(actual, expected);
	});

});

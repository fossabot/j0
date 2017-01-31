var assert = require('assert');
var compileRuleSet = require('../../mod/compileRuleSet');

describe('mod/compileRuleSet', function () {

	it('should compile a simple ruleset', function () {
		assert.equal(compileRuleSet(['body', [
			['color', 'red', '!important'],
			['background-color', '#ffffff']
		]]), 'body{color:red !important;background-color:#ffffff}');
	});

	it('should compile a ruleset with media query', function () {
		assert.equal(compileRuleSet(['@media(max-width:500px)', 'body', [
			['color', 'red', '!important'],
			['background-color', '#ffffff']
		]]), '@media(max-width:500px){body{color:red !important;background-color:#ffffff}}');
	});

	it('should add a dot to underscore-prefixed selector', function () {
		assert.equal(compileRuleSet(['_h1,_h2', [
			['color', 'red', '!important'],
			['background-color', '#ffffff']
		]]), '._h1,._h2{color:red !important;background-color:#ffffff}');
	});

});

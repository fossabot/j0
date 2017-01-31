var assert = require('assert');
var compileCSSDeclaration = require('../../mod/compileCSSDeclaration');

describe('compileCSSDeclaration', function () {

	it('should compile a simple declaration', function () {
		assert.equal(compileCSSDeclaration([
			'color', 'red'
		]), 'color:red');
	});

	it('should compile an important declaration', function () {
		assert.equal(compileCSSDeclaration([
			'color', 'red', '!important'
		]), 'color:red !important');
	});

	it('should compile a shorthand declaration', function () {
		assert.equal(compileCSSDeclaration([
			'padding', 1, 2, 3, 4
		]), 'padding:1 2 3 4');
	});

});

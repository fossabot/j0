var assert = require('assert');
var createElement = require('../../lib/createElement');
var appendChild = require('../../lib/appendChild');
var removeElement = require('../../lib/removeElement');
var getBody = require('../../lib/getBody');
var getStyle = require('../../lib/getStyle');
var declareStyle = require('../../mod/declareStyle');
var createCSSClass = require('../../mod/createCSSClass');

describe('mod/declareStyle', function () {

	var body;
	var element;

	before(function (done) {
		getBody.then(function (element) {
			body = element;
			done();
		}).catch(done);
	});

	afterEach(function () {
		if (element) {
			removeElement(element, body);
			element = null;
		}
	});

	it('should add a CSS ruleset', function () {
		var className = createCSSClass();
		element = appendChild(body, createElement({
			a: [
				['class', className]
			]
		}));
		declareStyle([className, [
			['margin', '50px']
		]]);
		assert.deepEqual(getStyle(element, 'margin-left'), '50px');
	});

});

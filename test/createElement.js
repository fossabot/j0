describe('createElement', function () {

	var assert = require('assert');
	var Node = require('../lib/Node');
	var getAttribute = require('../lib/getAttribute');
	var trigger = require('../lib/trigger');
	var createElement = require('../lib/createElement');

	it('should create nothing', function () {
		assert.equal(!createElement(), true);
	});

	it('should return the inputted text node', function () {
		var element = createElement('Sorcerer');
		assert.equal(createElement(element), element);
	});

	it('should return the inputted element node', function () {
		var element = createElement({});
		assert.equal(createElement(element), element);
	});

	it('should create a text node', function () {
		var node = createElement(100);
		assert.deepEqual([
			node.nodeType,
			node.textContent
		], [
			Node.TEXT_NODE,
			'100'
		]);
	});

	it('should create an element node', function () {
		var node = createElement({
			c: ['Giant']
		});
		assert.deepEqual([
			node.nodeType,
			node.textContent
		], [
			Node.ELEMENT_NODE,
			'Giant'
		]);
	});

	it('should set attributes', function () {
		var node = createElement({
			a: [
				['class', 'Gremlin'],
				['data-hp', 60],
				['data-atk', 72]
			]
		});
		assert.deepEqual([
			getAttribute(node, 'class'),
			getAttribute(node, 'data-hp'),
			getAttribute(node, 'data-atk')
		], [
			'Gremlin',
			'60',
			'72'
		]);
	});

	it('should set event listeners', function (done) {
		trigger(createElement({
			e: [
				['monster', function (event) {
					assert.deepEqual(event.detail, {
						name: 'Hargon\'s Knight'
					});
					done();
				}]
			]
		}), 'monster', {
			name: 'Hargon\'s Knight'
		});
	});

	it('should execute the after function', function () {
		var result;
		var element = createElement({
			after: function (element) {
				result = [this, element];
			}
		});
		assert.deepEqual(result, [element, element]);
	});

});

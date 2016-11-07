var assert = require('assert');
var MutationObserver = require('../lib/MutationObserver');
var slice = require('../lib/slice');
var forEach = require('../lib/forEach');
var createElement = require('../lib/createElement');
var appendChild = require('../lib/appendChild');
var setAttribute = require('../lib/setAttribute');
var setTextContent = require('../lib/setTextContent');

describe('MutationObserver', function () {

	var node = createElement({
		c: ['Infernavis']
	});
	var attrName = 'name';
	var attrValue = 'Leaonar';
	var textData = 'Light Boy';
	var subNode = createElement('Lizardman');

	it('should observe a mutation on its childList', function (done) {
		var observer = new MutationObserver(function (mutations) {
			forEach(mutations, function (mutation) {
				assert.deepEqual(slice(mutation.addedNodes), [node]);
			});
			observer.disconnect();
			done();
		});
		var config = {
			attributes: false,
			childList: true,
			characterData: false
		};
		var element = createElement({});
		observer.observe(element, config);
		appendChild(element, node);
	});

	it('should observe a mutation on its attributes', function (done) {
		var observer = new MutationObserver(function (mutations) {
			forEach(mutations, function (mutation) {
				assert.equal(mutation.attributeName, attrName);
			});
			observer.disconnect();
			done();
		});
		var config = {
			attributes: true,
			childList: false,
			characterData: false
		};
		var element = createElement({});
		observer.observe(element, config);
		appendChild(element, node);
		setTextContent(element, textData);
		setAttribute(element, attrName, attrValue);
	});

	it('should observe a mutation on its characterData', function (done) {
		var observer = new MutationObserver(function (mutations) {
			forEach(mutations, function (mutation) {
				assert.equal(mutation.target, element);
			});
			observer.disconnect();
			done();
		});
		var config = {
			attributes: false,
			childList: false,
			characterData: true
		};
		var element = createElement('');
		observer.observe(element, config);
		setTextContent(element, textData);
	});

	it('should observe a mutation on its subtree', function (done) {
		var observer = new MutationObserver(function (mutations) {
			assert.equal(mutations.length, 1);
			forEach(mutations, function (mutation) {
				assert.deepEqual(slice(mutation.addedNodes), [subNode]);
			});
			observer.disconnect();
			done();
		});
		var config = {
			attributes: false,
			childList: true,
			characterData: true,
			subtree: true
		};
		var element = createElement({});
		appendChild(element, node);
		observer.observe(element, config);
		appendChild(node, subNode);
	});

});

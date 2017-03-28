/* global browser, $$ */
const chalk = require('chalk');
const console = require('j1/console').create('wdio');

const lengthToRemoveArrowMark = -2;
const waitBody = 800;
const retry = 10;

browser.setViewportSize({
	width: 600,
	height: 600
});


describe('Array/every', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/every');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/every/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/every');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/every');
	});

});

describe('Array/filter', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/filter');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/filter/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/filter');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/filter');
	});

});

describe('Array/find', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/find');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/find/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/find');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/find');
	});

});

describe('Array/findIndex', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/findIndex');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/findIndex/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/findIndex');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/findIndex');
	});

});

describe('Array/forEach', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/forEach');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/forEach/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/forEach');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/forEach');
	});

});

describe('Array/from', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/from');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/from/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/from');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/from');
	});

});

describe('Array/includes', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/includes');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/includes/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/includes');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/includes');
	});

});

describe('Array', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array');
	});

});

describe('Array/isArray', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/isArray');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/isArray/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/isArray');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/isArray');
	});

});

describe('Array/join', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/join');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/join/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/join');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/join');
	});

});

describe('Array/map', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/map');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/map/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/map');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/map');
	});

});

describe('Array/of', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/of');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/of/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/of');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/of');
	});

});

describe('Array/polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/polyfill');
	});

});

describe('Array/push', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/push');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/push/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/push');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/push');
	});

});

describe('Array/reduce', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/reduce');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/reduce/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/reduce');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/reduce');
	});

});

describe('Array/shift', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/shift');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/shift/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/shift');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/shift');
	});

});

describe('Array/slice', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/slice');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/slice/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/slice');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/slice');
	});

});

describe('Array/splice', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/splice');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/splice/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/splice');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/splice');
	});

});

describe('clearTimeout', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: clearTimeout');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/clearTimeout/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: clearTimeout');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: clearTimeout');
	});

});

describe('CustomEvent', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: CustomEvent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/CustomEvent/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: CustomEvent');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: CustomEvent');
	});

});

describe('Date/format', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Date/format');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Date/format/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Date/format');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Date/format');
	});

});

describe('Date', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Date');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Date/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Date');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Date');
	});

});

describe('document', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: document');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/document/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: document');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: document');
	});

});

describe('dom/addClass', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/addClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/addClass/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/addClass');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/addClass');
	});

});

describe('dom/addEventListener', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/addEventListener');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/addEventListener/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/addEventListener');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/addEventListener');
	});

});

describe('dom/appendChild', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/appendChild');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/appendChild/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/appendChild');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/appendChild');
	});

});

describe('dom/createElement', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/createElement');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/createElement/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/createElement');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/createElement');
	});

});

describe('dom/empty', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/empty');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/empty/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/empty');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/empty');
	});

});

describe('dom/getAttribute', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/getAttribute');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getAttribute/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/getAttribute');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getAttribute');
	});

});

describe('dom/getEventListeners', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/getEventListeners');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getEventListeners/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/getEventListeners');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getEventListeners');
	});

});

describe('dom/getScrollY', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/getScrollY');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getScrollY/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/getScrollY');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getScrollY');
	});

});

describe('dom/hasClass', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/hasClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/hasClass/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/hasClass');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/hasClass');
	});

});

describe('dom/hasEventListener', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/hasEventListener');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/hasEventListener/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/hasEventListener');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/hasEventListener');
	});

});

describe('dom', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom');
	});

});

describe('dom/querySelector', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/querySelector');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/querySelector/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/querySelector');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/querySelector');
	});

});

describe('dom/querySelectorAll', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/querySelectorAll');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/querySelectorAll/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/querySelectorAll');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/querySelectorAll');
	});

});

describe('dom/removeAttribute', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/removeAttribute');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeAttribute/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/removeAttribute');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/removeAttribute');
	});

});

describe('dom/removeChild', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/removeChild');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeChild/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/removeChild');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/removeChild');
	});

});

describe('dom/removeClass', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/removeClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeClass/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/removeClass');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/removeClass');
	});

});

describe('dom/removeEventListener', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/removeEventListener');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeEventListener/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/removeEventListener');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/removeEventListener');
	});

});

describe('dom/setAttribute', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/setAttribute');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/setAttribute/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/setAttribute');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/setAttribute');
	});

});

describe('dom/setStyle', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/setStyle');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/setStyle/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/setStyle');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/setStyle');
	});

});

describe('dom/setTextContent', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/setTextContent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/setTextContent/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/setTextContent');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/setTextContent');
	});

});

describe('dom/toggleClass', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/toggleClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/toggleClass/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/toggleClass');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/toggleClass');
	});

});

describe('dom/trigger', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/trigger');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/trigger/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/trigger');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/trigger');
	});

});

describe('Error', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Error');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Error/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Error');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Error');
	});

});

describe('getBody', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: getBody');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/getBody/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: getBody');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: getBody');
	});

});

describe('isArray', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isArray');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isArray/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isArray');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isArray');
	});

});

describe('isFunction', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isFunction');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isFunction/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isFunction');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isFunction');
	});

});

describe('isNode', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isNode');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isNode/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isNode');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isNode');
	});

});

describe('isNumber', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isNumber');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isNumber/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isNumber');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isNumber');
	});

});

describe('isString', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isString/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isString');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isString');
	});

});

describe('isUndefined', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isUndefined');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isUndefined/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isUndefined');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isUndefined');
	});

});

describe('JSON', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: JSON');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/JSON/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: JSON');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: JSON');
	});

});

describe('JSON/stringify', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: JSON/stringify');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/JSON/stringify/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: JSON/stringify');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: JSON/stringify');
	});

});

describe('location', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: location');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/location/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: location');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: location');
	});

});

describe('Map', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Map');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Map/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Map');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Map');
	});

});

describe('Map/polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Map/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Map/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Map/polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Map/polyfill');
	});

});

describe('Math/clamp', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Math/clamp');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Math/clamp/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Math/clamp');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Math/clamp');
	});

});

describe('Math', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Math');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Math/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Math');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Math');
	});

});

describe('navigator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: navigator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/navigator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: navigator');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: navigator');
	});

});

describe('Node', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Node');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Node/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Node');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Node');
	});

});

describe('Node/nextSibling', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Node/nextSibling');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Node/nextSibling/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Node/nextSibling');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Node/nextSibling');
	});

});

describe('Node/previousSibling', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Node/previousSibling');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Node/previousSibling/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Node/previousSibling');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Node/previousSibling');
	});

});

describe('noop', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: noop');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/noop/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: noop');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: noop');
	});

});

describe('noop/true', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: noop/true');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/noop/true/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: noop/true');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: noop/true');
	});

});

describe('Number', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Number');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Number/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Number');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Number');
	});

});

describe('Number/MAX_SAFE_INTEGER', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Number/MAX_SAFE_INTEGER');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Number/MAX_SAFE_INTEGER/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Number/MAX_SAFE_INTEGER');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Number/MAX_SAFE_INTEGER');
	});

});

describe('Number/toOrdinalString', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Number/toOrdinalString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Number/toOrdinalString/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Number/toOrdinalString');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Number/toOrdinalString');
	});

});

describe('Object', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Object');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Object/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Object');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Object');
	});

});

describe('Object/polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Object/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Object/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Object/polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Object/polyfill');
	});

});

describe('Object/toString', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Object/toString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Object/toString/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Object/toString');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Object/toString');
	});

});

describe('onError', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: onError');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/onError/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: onError');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: onError');
	});

});

describe('parseInt', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: parseInt');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/parseInt/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: parseInt');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: parseInt');
	});

});

describe('polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: polyfill');
	});

});

describe('postMessage', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: postMessage');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/postMessage/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: postMessage');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: postMessage');
	});

});

describe('Promise', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Promise');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Promise/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Promise');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Promise');
	});

});

describe('Promise/J0Promise', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Promise/J0Promise');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Promise/J0Promise/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Promise/J0Promise');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Promise/J0Promise');
	});

});

describe('Promise/polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Promise/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Promise/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Promise/polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Promise/polyfill');
	});

});

describe('Set', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Set');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Set/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Set');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Set');
	});

});

describe('Set/polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Set/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Set/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Set/polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Set/polyfill');
	});

});

describe('setImmediate', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: setImmediate');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/setImmediate/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: setImmediate');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: setImmediate');
	});

});

describe('setTimeout', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: setTimeout');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/setTimeout/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: setTimeout');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: setTimeout');
	});

});

describe('String', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: String');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: String');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: String');
	});

});

describe('String/leftpad', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: String/leftpad');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/leftpad/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: String/leftpad');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: String/leftpad');
	});

});

describe('String/polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: String/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: String/polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: String/polyfill');
	});

});

describe('String/repeat', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: String/repeat');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/repeat/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: String/repeat');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: String/repeat');
	});

});

describe('Symbol', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Symbol');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Symbol/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Symbol');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Symbol');
	});

});

describe('Symbol/polyfill', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Symbol/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Symbol/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Symbol/polyfill');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Symbol/polyfill');
	});

});

describe('TypeError', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: TypeError');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypeError/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypeError');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypeError');
	});

});

describe('window', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: window');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/window/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: window');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: window');
	});

});


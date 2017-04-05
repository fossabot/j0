/* global browser, $$ */
const chalk = require('chalk');
const console = require('j1/console').create('wdio');

const lengthToRemoveArrowMark = -2;
const waitBody = 3000;
const retry = 10;

browser.setViewportSize({
	width: 600,
	height: 600
});


describe('Array/@iterator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/@iterator');
	});

});

describe('Array/every', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/every');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/every/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/filter');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/filter/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/find');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/find/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/findIndex');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/findIndex/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/forEach');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/forEach/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/from');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/from/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/includes');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/includes/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/isArray');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/isArray/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/join');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/join/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/map');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/map/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/of');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/of/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/of');
	});

});

describe('Array/push', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/push');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/push/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/reduce');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/reduce/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/shift');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/shift/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/slice');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/slice/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Array/splice');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/splice/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Array/splice');
	});

});

describe('ArrayBuffer', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: ArrayBuffer');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/ArrayBuffer/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: ArrayBuffer');
	});

});

describe('ArrayBuffer/toString', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: ArrayBuffer/toString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/ArrayBuffer/toString/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: ArrayBuffer/toString');
	});

});

describe('Blob', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Blob');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Blob/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Blob');
	});

});

describe('Body', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Body');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Body/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Body');
	});

});

describe('Body/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Body/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Body/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Body/j0');
	});

});

describe('Boolean', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Boolean');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Boolean/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Boolean');
	});

});

describe('cancelAnimationFrame', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: cancelAnimationFrame');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/cancelAnimationFrame/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: cancelAnimationFrame');
	});

});

describe('Canvas/getContext', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Canvas/getContext');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Canvas/getContext/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Canvas/getContext');
	});

});

describe('Canvas', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Canvas');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Canvas/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Canvas');
	});

});

describe('clearTimeout', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: clearTimeout');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/clearTimeout/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: CustomEvent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/CustomEvent/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: CustomEvent');
	});

});

describe('DataView', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: DataView');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/DataView/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: DataView');
	});

});

describe('Date/format', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Date/format');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Date/format/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Date');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Date/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Date');
	});

});

describe('debounce', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: debounce');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/debounce/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: debounce');
	});

});

describe('decodeURIComponent', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: decodeURIComponent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/decodeURIComponent/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: decodeURIComponent');
	});

});

describe('document', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: document');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/document/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/addClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/addClass/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/addEventListener');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/addEventListener/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/appendChild');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/appendChild/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/appendChild');
	});

});

describe('dom/childNodes', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/childNodes');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/childNodes/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/childNodes');
	});

});

describe('dom/children', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/children');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/children/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/children');
	});

});

describe('dom/createElement', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/createElement');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/createElement/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/empty');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/empty/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/empty');
	});

});

describe('dom/firstChild', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/firstChild');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/firstChild/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/firstChild');
	});

});

describe('dom/getAttribute', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/getAttribute');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getAttribute/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getAttribute');
	});

});

describe('dom/getBoundingClientRect', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/getBoundingClientRect');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getBoundingClientRect/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getBoundingClientRect');
	});

});

describe('dom/getElementById', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/getElementById');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getElementById/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getElementById');
	});

});

describe('dom/getElementsByClassName', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/getElementsByClassName');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getElementsByClassName/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getElementsByClassName');
	});

});

describe('dom/getEventListeners', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/getEventListeners');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getEventListeners/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/getScrollY');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getScrollY/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getScrollY');
	});

});

describe('dom/getTextContent', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/getTextContent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getTextContent/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getTextContent');
	});

});

describe('dom/hasClass', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/hasClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/hasClass/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/hasEventListener');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/hasEventListener/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom');
	});

});

describe('dom/insertAfter', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/insertAfter');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/insertAfter/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/insertAfter');
	});

});

describe('dom/insertBefore', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/insertBefore');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/insertBefore/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/insertBefore');
	});

});

describe('dom/nextSibling', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/nextSibling');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/nextSibling/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/nextSibling');
	});

});

describe('dom/parentNode', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/parentNode');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/parentNode/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/parentNode');
	});

});

describe('dom/prependChild', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/prependChild');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/prependChild/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/prependChild');
	});

});

describe('dom/previousSibling', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/previousSibling');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/previousSibling/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/previousSibling');
	});

});

describe('dom/querySelector', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/querySelector');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/querySelector/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/querySelectorAll');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/querySelectorAll/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/removeAttribute');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeAttribute/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/removeChild');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeChild/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/removeClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeClass/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/removeEventListener');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/removeEventListener/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/setAttribute');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/setAttribute/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/setStyle');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/setStyle/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/setTextContent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/setTextContent/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/toggleClass');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/toggleClass/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: dom/trigger');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/trigger/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/trigger');
	});

});

describe('DOMParser', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: DOMParser');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/DOMParser/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: DOMParser');
	});

});

describe('Error', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Error');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Error/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Error');
	});

});

describe('fetch', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: fetch');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/fetch/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: fetch');
	});

});

describe('fetch/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: fetch/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/fetch/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: fetch/j0');
	});

});

describe('FileReader', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: FileReader');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FileReader/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: FileReader');
	});

});

describe('FileReader/promisify', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: FileReader/promisify');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FileReader/promisify/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: FileReader/promisify');
	});

});

describe('FileReader/readBlob', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: FileReader/readBlob');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FileReader/readBlob/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: FileReader/readBlob');
	});

});

describe('FormData', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: FormData');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FormData/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: FormData');
	});

});

describe('FormData/parse', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: FormData/parse');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FormData/parse/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: FormData/parse');
	});

});

describe('getBody', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: getBody');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/getBody/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: getBody');
	});

});

describe('getComputedStyle', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: getComputedStyle');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/getComputedStyle/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: getComputedStyle');
	});

});

describe('Headers', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Headers');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Headers/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Headers');
	});

});

describe('Headers/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Headers/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Headers/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Headers/j0');
	});

});

describe('Headers/parse', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Headers/parse');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Headers/parse/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Headers/parse');
	});

});

describe('history', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: history');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/history/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: history');
	});

});

describe('HTMLCollection/@iterator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: HTMLCollection/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/HTMLCollection/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: HTMLCollection/@iterator');
	});

});

describe('HTMLCollection', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: HTMLCollection');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/HTMLCollection/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: HTMLCollection');
	});

});

describe('innerHeight', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: innerHeight');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/innerHeight/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: innerHeight');
	});

});

describe('innerWidth', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: innerWidth');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/innerWidth/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: innerWidth');
	});

});

describe('isArray', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isArray');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isArray/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isArray');
	});

});

describe('isArrayBufferView', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isArrayBufferView');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isArrayBufferView/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isArrayBufferView');
	});

});

describe('isFunction', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isFunction');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isFunction/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isFunction');
	});

});

describe('isInstanceOf', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isInstanceOf');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isInstanceOf/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: isInstanceOf');
	});

});

describe('isNode', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isNode');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isNode/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isNumber');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isNumber/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isString/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: isUndefined');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isUndefined/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: JSON');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/JSON/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: JSON');
	});

});

describe('JSON/parse', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: JSON/parse');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/JSON/parse/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: JSON/parse');
	});

});

describe('JSON/stringify', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: JSON/stringify');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/JSON/stringify/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: location');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/location/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: location');
	});

});

describe('Map/@iterator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Map/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Map/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Map/@iterator');
	});

});

describe('Map', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Map');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Map/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Map');
	});

});

describe('Map/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Map/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Map/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Map/j0');
	});

});

describe('Math/clamp', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Math/clamp');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Math/clamp/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Math/clamp');
	});

});

describe('Math/cubicBezier', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Math/cubicBezier');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Math/cubicBezier/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Math/cubicBezier');
	});

});

describe('Math', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Math');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Math/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Math');
	});

});

describe('NamedNodeMap/@iterator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: NamedNodeMap/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NamedNodeMap/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: NamedNodeMap/@iterator');
	});

});

describe('NamedNodeMap', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: NamedNodeMap');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NamedNodeMap/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: NamedNodeMap');
	});

});

describe('navigator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: navigator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/navigator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Node');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Node/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Node/nextSibling');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Node/nextSibling/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Node/previousSibling');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Node/previousSibling/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Node/previousSibling');
	});

});

describe('NodeList/@iterator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: NodeList/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NodeList/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: NodeList/@iterator');
	});

});

describe('NodeList', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: NodeList');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NodeList/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: NodeList');
	});

});

describe('noop', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: noop');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/noop/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: noop/true');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/noop/true/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Number');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Number/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Number/MAX_SAFE_INTEGER');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Number/MAX_SAFE_INTEGER/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Number/toOrdinalString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Number/toOrdinalString/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Number/toOrdinalString');
	});

});

describe('Object/forEachKey', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Object/forEachKey');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Object/forEachKey/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Object/forEachKey');
	});

});

describe('Object', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Object');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Object/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Object');
	});

});

describe('Object/toString', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Object/toString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Object/toString/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: onError');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/onError/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: parseInt');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/parseInt/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: postMessage');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/postMessage/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Promise');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Promise/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Promise');
	});

});

describe('Promise/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Promise/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Promise/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Promise/j0');
	});

});

describe('Request', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Request');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Request/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Request');
	});

});

describe('Request/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Request/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Request/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Request/j0');
	});

});

describe('requestAnimationFrame', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: requestAnimationFrame');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/requestAnimationFrame/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: requestAnimationFrame');
	});

});

describe('Response', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Response');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Response/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Response');
	});

});

describe('Response/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Response/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Response/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Response/j0');
	});

});

describe('scrollBy', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: scrollBy');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/scrollBy/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: scrollBy');
	});

});

describe('scrollTo', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: scrollTo');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/scrollTo/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: scrollTo');
	});

});

describe('scrollX', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: scrollX');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/scrollX/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: scrollX');
	});

});

describe('scrollY', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: scrollY');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/scrollY/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: scrollY');
	});

});

describe('Set/@iterator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Set/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Set/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Set/@iterator');
	});

});

describe('Set', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Set');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Set/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Set');
	});

});

describe('Set/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Set/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Set/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Set/j0');
	});

});

describe('setImmediate', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: setImmediate');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/setImmediate/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: setTimeout');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/setTimeout/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: String');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: String/leftpad');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/leftpad/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: String/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
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
		const started = Date.now();
		this.timeout(30000);
		console.info('start: String/repeat');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/repeat/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: String/repeat');
	});

});

describe('String/toLowerCase', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: String/toLowerCase');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/toLowerCase/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: String/toLowerCase');
	});

});

describe('String/trim', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: String/trim');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/trim/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: String/trim');
	});

});

describe('StringList', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: StringList');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/StringList/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: StringList');
	});

});

describe('Symbol', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Symbol');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Symbol/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Symbol');
	});

});

describe('Symbol/iterator', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Symbol/iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Symbol/iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Symbol/iterator');
	});

});

describe('Symbol/polyfill', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: Symbol/polyfill');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Symbol/polyfill/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Symbol/polyfill');
	});

});

describe('throttle', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: throttle');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/throttle/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: throttle');
	});

});

describe('TypedArray/Float32Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Float32Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Float32Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Float32Array');
	});

});

describe('TypedArray/Float64Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Float64Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Float64Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Float64Array');
	});

});

describe('TypedArray/Int16Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Int16Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Int16Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Int16Array');
	});

});

describe('TypedArray/Int32Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Int32Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Int32Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Int32Array');
	});

});

describe('TypedArray/Int8Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Int8Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Int8Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Int8Array');
	});

});

describe('TypedArray/Uint16Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Uint16Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint16Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Uint16Array');
	});

});

describe('TypedArray/Uint32Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Uint32Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint32Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Uint32Array');
	});

});

describe('TypedArray/Uint8Array', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Uint8Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint8Array/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Uint8Array');
	});

});

describe('TypedArray/Uint8ClampedArray', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypedArray/Uint8ClampedArray');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint8ClampedArray/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypedArray/Uint8ClampedArray');
	});

});

describe('TypeError', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: TypeError');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypeError/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: TypeError');
	});

});

describe('URLSearchParams', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: URLSearchParams');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/URLSearchParams/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: URLSearchParams');
	});

});

describe('URLSearchParams/j0', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: URLSearchParams/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/URLSearchParams/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: URLSearchParams/j0');
	});

});

describe('window', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: window');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/window/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: window');
	});

});

describe('XMLHttpRequest', function () {

	before(function () {
		const started = Date.now();
		this.timeout(30000);
		console.info('start: XMLHttpRequest');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/XMLHttpRequest/');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: XMLHttpRequest');
	});

});


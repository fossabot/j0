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


describe('Array/@iterator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Array/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Array/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Array/@iterator');
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

describe('ArrayBuffer', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: ArrayBuffer');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/ArrayBuffer/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: ArrayBuffer');
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
		this.timeout(30000);
		console.info('start: ArrayBuffer/toString');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/ArrayBuffer/toString/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: ArrayBuffer/toString');
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
		this.timeout(30000);
		console.info('start: Blob');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Blob/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Blob');
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
		this.timeout(30000);
		console.info('start: Body');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Body/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Body');
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
		this.timeout(30000);
		console.info('start: Body/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Body/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Body/j0');
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
		this.timeout(30000);
		console.info('start: Boolean');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Boolean/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Boolean');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Boolean');
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

describe('DataView', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: DataView');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/DataView/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: DataView');
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

describe('decodeURIComponent', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: decodeURIComponent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/decodeURIComponent/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: decodeURIComponent');
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

describe('dom/getChildNodes', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/getChildNodes');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getChildNodes/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/getChildNodes');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getChildNodes');
	});

});

describe('dom/getElementById', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/getElementById');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getElementById/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/getElementById');
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
		this.timeout(30000);
		console.info('start: dom/getElementsByClassName');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getElementsByClassName/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/getElementsByClassName');
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

describe('dom/getParent', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/getParent');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/getParent/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/getParent');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/getParent');
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

describe('dom/insertBefore', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: dom/insertBefore');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/dom/insertBefore/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: dom/insertBefore');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: dom/insertBefore');
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

describe('fetch', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: fetch');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/fetch/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: fetch');
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
		this.timeout(30000);
		console.info('start: fetch/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/fetch/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: fetch/j0');
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
		this.timeout(30000);
		console.info('start: FileReader');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FileReader/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: FileReader');
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
		this.timeout(30000);
		console.info('start: FileReader/promisify');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FileReader/promisify/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: FileReader/promisify');
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
		this.timeout(30000);
		console.info('start: FileReader/readBlob');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FileReader/readBlob/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: FileReader/readBlob');
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
		this.timeout(30000);
		console.info('start: FormData');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FormData/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: FormData');
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
		this.timeout(30000);
		console.info('start: FormData/parse');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/FormData/parse/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: FormData/parse');
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

describe('Headers', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Headers');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Headers/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Headers');
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
		this.timeout(30000);
		console.info('start: Headers/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Headers/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Headers/j0');
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
		this.timeout(30000);
		console.info('start: Headers/parse');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Headers/parse/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Headers/parse');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Headers/parse');
	});

});

describe('HTMLCollection/@iterator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: HTMLCollection/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/HTMLCollection/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: HTMLCollection/@iterator');
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
		this.timeout(30000);
		console.info('start: HTMLCollection');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/HTMLCollection/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: HTMLCollection');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: HTMLCollection');
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

describe('isArrayBufferView', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isArrayBufferView');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isArrayBufferView/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isArrayBufferView');
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

describe('isInstanceOf', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: isInstanceOf');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/isInstanceOf/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: isInstanceOf');
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

describe('JSON/parse', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: JSON/parse');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/JSON/parse/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: JSON/parse');
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

describe('Map/@iterator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Map/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Map/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Map/@iterator');
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

describe('Map/j0', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Map/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Map/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Map/j0');
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

describe('NamedNodeMap/@iterator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: NamedNodeMap/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NamedNodeMap/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: NamedNodeMap/@iterator');
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
		this.timeout(30000);
		console.info('start: NamedNodeMap');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NamedNodeMap/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: NamedNodeMap');
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

describe('NodeList/@iterator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: NodeList/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NodeList/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: NodeList/@iterator');
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
		this.timeout(30000);
		console.info('start: NodeList');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/NodeList/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: NodeList');
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

describe('Object/forEachKey', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Object/forEachKey');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Object/forEachKey/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Object/forEachKey');
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

describe('Promise/j0', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Promise/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Promise/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Promise/j0');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Promise/j0');
	});

});

describe('regeneratorRuntime', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: regeneratorRuntime');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/regeneratorRuntime/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: regeneratorRuntime');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: regeneratorRuntime');
	});

});

describe('regeneratorRuntime/j0', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: regeneratorRuntime/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/regeneratorRuntime/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: regeneratorRuntime/j0');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: regeneratorRuntime/j0');
	});

});

describe('Request', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Request');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Request/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Request');
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
		this.timeout(30000);
		console.info('start: Request/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Request/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Request/j0');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Request/j0');
	});

});

describe('Response', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Response');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Response/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Response');
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
		this.timeout(30000);
		console.info('start: Response/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Response/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Response/j0');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: Response/j0');
	});

});

describe('Set/@iterator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Set/@iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Set/@iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Set/@iterator');
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

describe('Set/j0', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Set/j0');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Set/j0/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Set/j0');
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

describe('String/toLowerCase', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: String/toLowerCase');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/toLowerCase/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: String/toLowerCase');
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
		this.timeout(30000);
		console.info('start: String/trim');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/String/trim/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: String/trim');
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
		this.timeout(30000);
		console.info('start: StringList');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/StringList/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: StringList');
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

describe('Symbol/iterator', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: Symbol/iterator');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/Symbol/iterator/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: Symbol/iterator');
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

describe('TypedArray/Float32Array', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: TypedArray/Float32Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Float32Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Float32Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Float64Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Float64Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Float64Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Int16Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Int16Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Int16Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Int32Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Int32Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Int32Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Int8Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Int8Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Int8Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Uint16Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint16Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Uint16Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Uint32Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint32Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Uint32Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Uint8Array');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint8Array/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Uint8Array');
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
		this.timeout(30000);
		console.info('start: TypedArray/Uint8ClampedArray');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/TypedArray/Uint8ClampedArray/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: TypedArray/Uint8ClampedArray');
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

describe('URLSearchParams', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: URLSearchParams');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/URLSearchParams/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: URLSearchParams');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: URLSearchParams');
	});

});

describe('URLSearchParams/J0URLSearchParams', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: URLSearchParams/J0URLSearchParams');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/URLSearchParams/J0URLSearchParams/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: URLSearchParams/J0URLSearchParams');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: URLSearchParams/J0URLSearchParams');
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

describe('XMLHttpRequest', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: XMLHttpRequest');
		this.retries(retry);
		browser.url('http://127.0.0.1:4000/XMLHttpRequest/');
		browser.waitForExist('body.done', waitBody);
		console.info('end: XMLHttpRequest');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: XMLHttpRequest');
	});

});


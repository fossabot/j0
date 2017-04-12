/* global chai */
import window from '../../window';
import getBody from '../../getBody';
import onError from '../../onError';
import Promise from '../../Promise';
import document from '../../document';
import navigator from '../../navigator';
import location from '../../location';
import insertAfter from '../../dom/insertAfter';
import getElementById from '../../dom/getElementById';
import getTextContent from '../../dom/getTextContent';
import appendChild from '../../dom/appendChild';
import createElement from '../../dom/createElement';
import forEach from '../../Array/forEach';
import reduce from '../../Array/reduce';
import push from '../../Array/push';
import forEachKey from '../../Object/forEachKey';
import fetch from '../../fetch';

const {mocha} = window;

function startMocha() {
	mocha.run()
		.once('end', function () {
			const className = 0 < this.stats.failures ? 'failed' : 'passed';
			document.body.classList.add('done');
			document.body.classList.add(className);
			document.title += `[${className}]`;
		});
}

function showEnvironment() {
	const environment = getElementById('environment');
	forEach(Object.keys(navigator.constructor.prototype), function (key) {
		const value = navigator[key];
		appendChild(environment, createElement({
			t: 'tr',
			a: [
				['class', typeof value]
			],
			c: [
				{
					t: 'th',
					c: [key]
				},
				{
					t: 'td',
					c: [value]
				}
			]
		}));
	});
}

async function createNavigation() {
	const root = getTextContent(getElementById('root'));
	const response = await fetch(`${root}/sitemap.json`);
	const tree = await response.json();
	const rootBranch = reduce(location.pathname.replace(/^\/|\/$/g, '').split('/'), function (parent, name) {
		return name ? parent[name] : parent;
	}, tree);
	function parseBranch(parent, name, base) {
		const childElements = [];
		forEachKey(parent, function (branch, key) {
			push(childElements, parseBranch(branch, key, base ? `${base}/${name}` : name));
		});
		const ul = 0 < childElements.length ? {
			t: 'ul',
			c: childElements
		} : null;
		return name ? {
			t: 'li',
			c: [
				{
					t: 'a',
					a: [
						['href', base ? `${base}/${name}` : name]
					],
					c: [name]
				},
				ul
			]
		} : ul;
	}
	const nav = parseBranch(rootBranch, '', '');
	if (nav) {
		insertAfter(createElement(nav), getElementById('title'));
	}
}

if (mocha) {
	window.assert = chai.assert;
	mocha.setup('bdd');
	window.start = startMocha;
}

getBody
.then(function () {
	return Promise.all([
		mocha && showEnvironment(),
		createNavigation()
	]);
})
.catch(onError);

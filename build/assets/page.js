/* global chai */
import {
	dom,
	onError,
	window,
	fetch,
	location,
	navigator,
	document,
	Promise,
	Object
} from 'j0';

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
	const environment = dom.find('#environment');
	Object.keys(navigator.constructor.prototype)
	.forEach(function (key) {
		const value = navigator[key];
		environment
		.append({
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
		});
	});
}

function normalizeUrl(url) {
	return url.split('/')
	.reduce(function (result, fragment) {
		switch (fragment) {
		case '..':
			result.pop();
			break;
		case '.':
		case '':
			break;
		default:
			result.push(fragment);
		}
		return result;
	}, [])
	.join('/');
}

async function createNavigation() {
	const root = dom.find('#root').text;
	const response = await fetch(`${root}/sitemap.json`);
	const tree = await response.json();
	const {pathname} = location;
	const basePath = `/${normalizeUrl(`${pathname}/${root}`)}/`;
	const rootBranch = pathname.replace(basePath, '').split('/')
	.reduce(function (parent, name) {
		return name ? parent[name] : parent;
	}, tree);
	function parseBranch(parent, name, base) {
		const childElements = [];
		Object.keys(parent)
		.forEach(function (key) {
			const branch = parent[key];
			childElements.push(parseBranch(branch, key, base ? `${base}/${name}` : name));
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
		dom.find('#title')
		.after(nav);
	}
}

if (mocha) {
	window.assert = chai.assert;
	mocha.setup('bdd');
	window.start = startMocha;
}

dom.ready()
.then(function () {
	return Promise.all([
		mocha && showEnvironment(),
		createNavigation()
	]);
})
.catch(onError);

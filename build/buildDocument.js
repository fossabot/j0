const path = require('path');
const fs = require('fs');
const console = require('j1/console').create('buildDocument');
const promisify = require('j1/promisify');
const debounce = require('j1/debounce');
const paze = require('paze');
const readdir = promisify(fs.readdir, fs);
const stat = promisify(fs.stat, fs);

const {
	ignore,
	src,
	dest,
	watch,
	template,
	packageJSON
} = require('./constants');
const buildIndexDebounce = 2000;
const buildIndexes = debounce(require('./buildIndexes'), buildIndexDebounce);

function wrapLine(line) {
	return `<span class="linenum"></span>${line}`;
}

function convertRelativeLinks(line, linkSkip = 0) {
	return line.replace(/<span class="string">('|")(\.[./\w-]+)\1<\/span>/g, (code, quote, relativePath) => {
		if (relativePath === '..') {
			return code;
		}
		return `<a href="${
			relativePath
			.replace(/^(?:\.\.\/)+/, (linkFragment) => {
				return linkFragment.split('/')
				.slice(linkSkip)
				.join('/');
			})
			.replace(/\/test$/, '')
		}"><span class="string">${code}</span></a>`;
	});
}

function convertTabs(line) {
	return line.replace(/\t/g, '<span class="indent">\t</span>');
}

function formatCode(code, linkSkip) {
	return code
	.split(/\n/)
	.map((line) => {
		let result = line;
		result = convertRelativeLinks(result, linkSkip);
		result = convertTabs(result);
		result = wrapLine(result);
		return result;
	})
	.join('\n');
}

function getContextGenerator(destPath, dir, children) {
	function setupContext(context) {
		context.dest = destPath;
		context.template = template;
		context.name = dir;
		context.package = packageJSON;
		context.children = children;
		context.titleHTML = `${packageJSON.name}/${context.name}`.split(/\s*\/\s*/)
		.reverse()
		.map((fragment, index) => {
			return 0 < index ? `<a href="${'../'.repeat(index)}">${fragment}</a>` : fragment;
		})
		.reverse()
		.join('/');
		context.root = `${context.name.split('/').map(() => {
			return '..';
		})
		.join('/')}`;
		context.code = formatCode(context.code);
		context.test.code = formatCode(context.test.code, 1);
		if (watch) {
			buildIndexes();
		}
	}
	return setupContext;
}

function buildDocument(file) {
	if ((/\.test\.js$/).test(file) && !ignore.test(file)) {
		const dir = path.relative(dest, path.join(file, '..'));
		const scriptPath = path.join(src, dir, 'index.mjs');
		const testScriptPath = path.join(src, dir, 'test', 'index.js');
		const destPath = path.join(path.dirname(file), 'index.html');
		return readdir(path.join(src, dir))
		.then((files) => {
			return Promise.all(files.map((name) => {
				return name !== 'test' && stat(path.join(src, dir, name))
				.then((stats) => {
					if (stats.isDirectory()) {
						return {childname: name};
					}
					return null;
				});
			}));
		})
		.then(function (files) {
			const children = files.filter((name) => {
				return name;
			});
			return paze({
				src: scriptPath,
				test: testScriptPath,
				watch: watch,
				beforeRender: getContextGenerator(destPath, dir, children)
			});
		})
		.catch(console.onError);
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

module.exports = buildDocument;

const path = require('path');
const fs = require('fs');
const console = require('j1/console').create('buildDocument');
const promisify = require('j1/promisify');
const paze = require('paze');
const readdir = promisify(fs.readdir, fs);
const stat = promisify(fs.stat, fs);

const {ignore, src, dest, watch, template} = require('./constants.es');
const packageJSON = require('../package/package');

function wrapLine(line) {
	return `<span class="linenum"></span>${line}`;
}

function convertRelativeLinks(line) {
	return line.replace(/<span class="string">('|")(\.[./\w-]+)\1<\/span>/g, (match, quote, relativePath) => {
		if (relativePath === '..') {
			return match;
		}
		return `<a href="${relativePath}"><span class="string">${match}</span></a>`;
	});
}

function convertTabs(line) {
	return line.replace(/\t/g, '<span class="indent">\t</span>');
}

function formatCode(code) {
	return code
	.split(/\n/)
	.map((line) => {
		return [
			convertRelativeLinks,
			convertTabs,
			wrapLine
		].reduce((lineString, fn) => {
			return fn(lineString);
		}, line);
	})
	.join('\n');
}

function buildDocument(file) {
	if ((/\.test\.js$/).test(file) && !ignore.test(file)) {
		const dir = path.relative(dest, path.join(file, '..'));
		const scriptPath = path.join(src, dir, 'index.mjs');
		const testScriptPath = path.join(src, dir, 'test', 'index.es');
		const destPath = path.join(path.dirname(file), 'index.html');
		console.debug(`document ${dir}`);
		return readdir(dir)
		.then((files) => {
			return Promise.all(files.map((name) => {
				return name !== 'test' && stat(path.join(dir, name))
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
				beforeRender: function (context) {
					context.dest = destPath;
					context.template = template;
					context.name = dir;
					context.package = packageJSON;
					context.children = children;
					context.titleHTML = `${packageJSON.name}/${context.name}`.split(/\s*\/\s*/)
					.reverse()
					.map((fragment, index) => {
						let html = fragment;
						if (0 < index) {
							html = `<a href="${'../'.repeat(index)}">${fragment}</a>`;
						}
						return html;
					})
					.reverse()
					.join('/');
					context.root = `${context.name.split('/').map(() => {
						return '..';
					})
					.join('/')}`;
					context.code = formatCode(context.code);
					context.test.code = formatCode(context.test.code);
				}
			});
		})
		.then(() => {
			console.debug(`documented ${dir}`);
		})
		.catch(console.onError);
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

module.exports = buildDocument;

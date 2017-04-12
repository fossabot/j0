const path = require('path');
const paze = require('paze');

const {
	projectRoot,
	dest,
	serverMode,
	packageJSON,
	message
} = require('../constants');

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

function buildHTML(modulePath) {
	const testScriptPath = path.join(projectRoot, modulePath, 'test', 'index.js');
	const moduleScriptPath = path.join(projectRoot, modulePath, 'index.mjs');
	return paze({
		template: path.join(__dirname, 'template.html'),
		src: moduleScriptPath,
		test: testScriptPath,
		watch: serverMode,
		dest: path.join(dest, modulePath, 'index.html'),
		name: modulePath,
		package: packageJSON,
		message,
		titleHTML: `${packageJSON.name}/${modulePath}`.split(path.sep)
		.reverse()
		.map((fragment, index) => {
			return 0 < index ? `<a href="${'../'.repeat(index)}">${fragment}</a>` : fragment;
		})
		.reverse()
		.join('/'),
		root: modulePath.split(path.sep)
		.map(function () {
			return '..';
		})
		.join('/'),
		beforeRender: function (context) {
			context.code = formatCode(context.code);
			context.test.code = formatCode(context.test.code, 1);
		}
	});
}

module.exports = buildHTML;

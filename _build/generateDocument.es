const fs = require('fs');
const path = require('path');
const mu = require('mu2');
const writeFile = require('j1/writeFile');
const changeExt = require('j1/changeExt');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);

const parseCode = require('./parseCode.es');
const projectRoot = path.join(__dirname, '..');
const documentRoot = path.join(projectRoot, 'docs');

const templatePath = path.join(__dirname, 'template.html');

function getBlocks(file) {
	return readFile(file, 'utf8')
	.then((code) => {
		return parseCode(code);
	});
}

function generateDocument(file) {
	const relativePath = path.relative(projectRoot, file);
	return Promise.all([
		getBlocks(file.replace(/\.test\.es$/, '.mjs')),
		getBlocks(file)
	])
	.then(([blocks, testBlocks]) => {
		const dest = path.join(documentRoot, changeExt(relativePath, '.html'));
		const name = relativePath.replace(/\/[^/]*?$/, '');
		const context = {
			name: name,
			blocks: blocks,
			testBlocks: testBlocks,
			cssPath: `${name.split('/').map(() => {
				return '..';
			})
			.join('/')}/page.css`
		};
		const stream = mu.compileAndRender(templatePath, context);
		return writeFile(dest, stream);
	});
}

module.exports = generateDocument;

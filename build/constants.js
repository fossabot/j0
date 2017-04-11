const path = require('path');
const packageJSON = require('../package');
const root = path.join(__dirname, '..');
const src = root;
const dest = path.join(root, 'docs');
module.exports = {
	format: 'umd',
	root,
	src,
	dest,
	ignore: /[/\\][._]|node_modules/,
	exts: ['.js', '.mjs'],
	watch: process.argv.includes('--watch'),
	quiet: process.argv.includes('--quiet'),
	packageJSON,
	template: path.join(__dirname, 'template.html'),
	indexTemplate: path.join(__dirname, 'indexTemplate.html'),
	styl: [
		path.join(__dirname, 'page.styl')
	],
	js: [
		path.join(__dirname, 'page.js'),
		path.join(__dirname, 'polyfill.js')
	],
	wdioTemplate: path.join(__dirname, 'wdioTemplate.js'),
	wdioDest: path.join(dest, 'wdio.js'),
	staticFiles: path.join(__dirname, 'staticFiles'),
	staticFilesDest: path.join(dest, 'staticFiles')
};

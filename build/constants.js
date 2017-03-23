const path = require('path');
const packageJSON = require('../package');
module.exports = {
	format: 'umd',
	root: path.join(__dirname, '..'),
	src: path.join(__dirname, '..', 'package'),
	dest: path.join(__dirname, '..', 'docs'),
	styl: path.join(__dirname, 'page.styl'),
	js: path.join(__dirname, 'page.js'),
	template: path.join(__dirname, 'template.html'),
	indexTemplate: path.join(__dirname, 'indexTemplate.html'),
	ignore: /[/\\][._]|node_modules/,
	exts: ['.js', '.mjs'],
	watch: process.argv.includes('--watch'),
	packageJSON: packageJSON
};

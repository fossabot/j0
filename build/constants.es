const path = require('path');
module.exports = {
	root: path.join(__dirname, '..'),
	src: path.join(__dirname, '..', 'package'),
	dest: path.join(__dirname, '..', 'docs'),
	styl: path.join(__dirname, 'page.styl'),
	js: path.join(__dirname, 'page.es'),
	template: path.join(__dirname, 'template.html'),
	ignore: /[/\\][._]|node_modules/,
	exts: ['.es', '.mjs'],
	watch: process.argv.includes('--watch')
};

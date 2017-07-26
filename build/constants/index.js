const path = require('path');
const projectDir = path.join(__dirname, '..', '..');
const docsDir = path.join(projectDir, 'docs');
const libDir = path.join(projectDir, 'lib');
const polyfillDir = path.join(projectDir, 'polyfill');
module.exports = {
	projectDir,
	docsDir,
	libDir,
	polyfillDir,
	watch: process.argv.includes('--watch'),
	polyfills: [
		'polyfill-symbol.js',
		'polyfill-others.js',
		'polyfill-regenerator-runtime.js'
	]
	.map((name) => {
		return path.join(docsDir, name);
	})
};

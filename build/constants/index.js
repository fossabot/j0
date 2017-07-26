const path = require('path');
const projectDir = path.join(__dirname, '..', '..');
const docsDir = path.join(projectDir, 'docs');
const libDir = path.join(projectDir, 'lib');
const polyfillDir = path.join(projectDir, 'polyfill');
const nodeDir = path.join(projectDir, 'node_modules');
module.exports = {
	projectDir,
	docsDir,
	libDir,
	polyfillDir,
	watch: process.argv.includes('--watch'),
	copies: [
		{
			from: [
				path.join(projectDir, 'package.json')
			],
			to: path.join(docsDir, 'package.json')
		},
		{
			from: [
				path.join(nodeDir, 'regenerator-runtime', 'runtime.js')
			],
			to: path.join(docsDir, 'polyfill-regenerator-runtime.js')
		},
		{
			from: [
				path.join(nodeDir, 'mocha', 'mocha.js'),
				path.join(nodeDir, 'chai', 'chai.js')
			],
			to: path.join(docsDir, 'test-runner.min.js')
		},
		{
			from: [
				path.join(nodeDir, 'mocha', 'mocha.css')
			],
			to: path.join(docsDir, 'test-runner.min.css')
		}
	],
	polyfills: [
		'polyfill-symbol.js',
		'polyfill-others.js',
		'polyfill-regenerator-runtime.js'
	]
	.map((name) => {
		return path.join(docsDir, name);
	})
};

/* eslint-disable no-magic-numbers */
const path = require('path');
const console = require('j1/console').create('compileNormalizeTest');
const writeFile = require('j1/writeFile');
const load = require('../load');

async function compileNormalizeTest() {
	const tests = (await load('NormalizationTest.txt'))
	.map((test) => {
		return test
		.slice(0, 5)
		.map((codes) => {
			return `"${
				codes
				.split(/\s+/)
				.map((code) => {
					return `\\u${code}`;
				})
				.join('')
			}"`;
		});
	});
	await writeFile(
		path.join(__dirname, '..', '..', '..', 'String', 'normalize', 'test', 'tests.json'),
		`[
${
	tests
	.map((tests) => {
		return `\t[${tests.join(', ')}]`;
	})
	.join(',\n')
}
		]
		`
	);
}

if (module.parent) {
	module.exports = compileNormalizeTest;
} else {
	compileNormalizeTest()
	.catch(console.onError);
}

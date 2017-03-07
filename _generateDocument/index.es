const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const console = require('j1/console').create('generateDocument');
const writeFile = require('j1/writeFile');
const changeExt = require('j1/changeExt');
const trim = require('j1/trim');
const promisify = require('j1/promisify');
const rm = require('j1/rm');
const readFile = promisify(fs.readFile, fs);
const glob = promisify(require('glob'));

const projectRoot = path.join(__dirname, '..');
const documentPath = path.join(projectRoot, 'docs');

function wrapCode(code) {
	if (/\S/.test(code)) {
		return `\n\`\`\`javasript\n${trim(code)}\n\`\`\`\n`;
	}
	return '';
}

function generateDocument(file) {
	const relativePath = path.relative(projectRoot, file);
	const dest = path.join(documentPath, changeExt(relativePath, '.md'));
	return readFile(file, 'utf8')
	.then((code) => {
		const result = [];
		let pos = 0;
		acorn.parse(code, {
			ecmaVersion: 7,
			sourceType: 'module',
			onComment: function (block, text, start, end) {
				if (!block) {
					result.push(
						wrapCode(code.slice(pos, start)),
						trim(text)
					);
					pos = end;
				}
			}
		});
		result.push(wrapCode(code.slice(pos)));
		return writeFile(dest, trim(result.join('\n')));
	});
}

rm(documentPath)
.then(() => {
	return glob(path.join(projectRoot, '**', '*.mjs'));
})
.then((files) => {
	return Promise.all(files.map(generateDocument));
})
.catch(console.onError);

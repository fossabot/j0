const fs = require('fs');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const childProcess = require('child_process');
const readFile = promisify(fs.readFile, fs);

Promise.resolve()
.then(async () => {
	const code = 'grep -rn "*/test\'" lib';
	const files = (await promisify(childProcess.exec)(code))
	.split(/\r\n|\r|\n/)
	.map((line) => {
		return line.split(':')[0];
	})
	.filter((file) => {
		return 0 < file.length;
	});
	for (const file of files) {
		const code = (await readFile(file, 'utf8'))
		.replace(/(import '[^']+test)(')/g, (match, a, b) => {
			return `${a}/index.js${b}`;
		});
		await writeFile(file, code);
	}
})
.catch(console.error);

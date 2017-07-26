const path = require('path');
const fs = require('fs');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const childProcess = require('child_process');
const readFile = promisify(fs.readFile, fs);

Promise.resolve()
.then(async () => {
	const code = 'grep -rn "from \'" lib';
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
		.split(/\r\n|\r|\n/)
		.map((line) => {
			if (/\s*\/\//.test(line)) {
				return line;
			}
			return line
			.replace(/(from ')([^']+)(')/g, (match, a, b, c) => {
				if (path.extname(b)) {
					return match;
				}
				switch (b) {
				case 'j0':
					return match;
				}
				try {
					const abs = require.resolve(path.join(__dirname, path.dirname(file), b));
					const rel = path.relative(path.dirname(file), abs).replace(/^([^.])/, './$1');
					return `${a}${rel}${c}`;
				} catch (e) {
					console.log(file);
					console.log(b);
					console.log(e);
					return match;
				}
			});
		})
		.join('\n')
		await writeFile(file, code);
	}
})
.catch(console.error);

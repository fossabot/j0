const fs = require('fs');
const path = require('path');

const packageJSON = require('../package');
const projectRoot = path.join(__dirname, '..');
/* eslint-disable no-sync */
const ignores = fs.readFileSync(path.join(projectRoot, '.npmignore'), 'utf8').trim()
.split(/\s+/);
const targetDirectories = fs.readdirSync(projectRoot)
.filter((name) => {
	return (/^\w+$/).test(name) && !ignores.includes(name);
})
.map((name) => {
	return path.join(projectRoot, name);
});
/* eslint-enable no-sync */
const serverMode = process.argv.includes('--server');
const dest = path.join(projectRoot, 'docs');
const format = 'umd';

module.exports = {
	packageJSON,
	projectRoot,
	ignores,
	targetDirectories,
	serverMode,
	dest,
	format,
	message: [
		'j0 is free and open source software released under MIT license.',
		`The latest version is ${packageJSON.version}.`,
		'The project is on <a href="https://github.com/kei-ito/j0">GitHub</a>.',
		'If you found any problems, please report <a href="https://github.com/kei-ito/j0/issues">issues</a>.'
	].join(' ')
};

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
const format = 'es';

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
		'The project is on <a href="https://github.com/kei-ito/j0">GitHub</a>.',
		'If you found any problems, please report <a href="https://github.com/kei-ito/j0/issues">issues</a>.'
	].join(' '),
	ga: [
		'(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){',
		'(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),',
		'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)',
		'})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");',
		'ga("create", "UA-56327919-7", "auto");ga("send", "pageview");'
	].join('')
};

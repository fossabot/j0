const path = require('path');
const projectDir = path.join(__dirname, '..', '..');
const docsDir = path.join(projectDir, 'docs');
const libDir = path.join(projectDir, 'lib');
module.exports = {
	projectDir,
	docsDir,
	libDir,
	watch: process.argv.includes('--watch')
};

const path = require('path');
const projectDir = path.join(__dirname, '..');
const docsDir = path.join(projectDir, 'docs');
const libDir = path.join(projectDir, 'lib');
export default {
	projectDir,
	docsDir,
	libDir
};

const path = require('path');
const mu = require('mu2');
const console = require('j1/console').create('buildWebdriverScript');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const glob = promisify(require('glob'));

const {
	dest,
	projectRoot,
	targetDirectories
} = require('../constants');
const isBranch = Symbol('isBranch');

async function buildSiteMap() {
	const files = [].concat(...await Promise.all(targetDirectories.map(function (dirPath) {
		return glob(path.join(dirPath, '**', 'test'));
	})))
	.map((filePath) => {
		return path.relative(projectRoot, path.dirname(filePath)).split(path.sep);
	});
	const tree = files.reduce(function (result, fragments) {
		let parentBranch = result;
		for (const fragment of fragments) {
			let branch = parentBranch[fragment];
			if (!branch || !branch[isBranch]) {
				branch = {[isBranch]: true};
				parentBranch[fragment] = branch;
			}
			parentBranch = branch;
		}
		return result;
	}, {});
	const context = {
		modules: files.map((fragments) => {
			return {path: `${fragments.join('/')}/`};
		})
	};
	const stream = mu.compileAndRender(path.join(__dirname, 'template.xml'), context);
	stream.on('error', console.onError);
	return Promise.all([
		writeFile(path.join(dest, 'sitemap.xml'), stream),
		writeFile(path.join(dest, 'sitemap.json'), JSON.stringify(tree, null, '\t'))
	]);
}

module.exports = buildSiteMap;

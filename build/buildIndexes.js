const path = require('path');
const mu = require('mu2');
const console = require('j1/console').create('buildIndexes');
const isUndefined = require('j1/isUndefined');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const glob = promisify(require('glob'));

const {
	dest,
	indexTemplate
} = require('./constants');

function walk(node, promises) {
	const {name, children, hasFile} = node;
	children.forEach((child) => {
		child.path = path.join(name, child.name);
		walk(child, promises);
	});
	if (hasFile) {
		return null;
	}
	const destPath = path.join(dest, node.path, 'index.html');
	const stream = mu.compileAndRender(indexTemplate, node);
	console.info(`generate index of ${name || '/'}`);
	return writeFile(destPath, stream);
}

async function buildIndexes() {
	const rootTree = (await glob(path.join(dest, '**', '*.test.js'), {nodir: true}))
	.map((file) => {
		return path.relative(dest, path.dirname(file));
	})
	.reduce((tree, id) => {
		id.split(path.sep)
		.reduce((parent, name) => {
			const {children} = parent;
			let node = children.find((child) => {
				return child.name === name;
			});
			if (isUndefined(node)) {
				node = {
					name: name,
					children: []
				};
				children.push(node);
			}
			return node;
		}, tree).hasFile = true;
		return tree;
	}, {
		name: '',
		path: '',
		children: []
	});
	return walk(rootTree, []);
}

module.exports = buildIndexes;

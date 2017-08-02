const path = require('path');
const fs = require('fs');
const acorn = require('acorn');
const walk = require('acorn/dist/walk');
const promisify = require('j1/promisify');
const console = require('j1/console').create('j0');
const readFile = promisify(fs.readFile, fs);
const {createFilter} = require('rollup-pluginutils');

function rollupPlugin(options = {}) {
	const {include, exclude} = options;
	const filter = createFilter(include, exclude);
	const j0prefix = __dirname;
	const windowFallback = path.join(j0prefix, 'window-fallback');
	return {
		resolveId: (importee, importer) => {
			if (!filter(importee)) {
				return null;
			}
			if (importee.startsWith(windowFallback)) {
				return importee;
			} else if (importee !== 'j0') {
				return null;
			}
			return path.join(j0prefix, importer);
		},
		load: async (id) => {
			if (!id.startsWith(j0prefix)) {
				return;
			}
			if (0 <= id.indexOf(windowFallback)) {
				const name = id.split(windowFallback).pop()
				.slice(1);
				return `const x = ${name};\nexport default x;`;
			}
			const importer = path.relative(j0prefix, id).replace(/^([^/])/, '/$1');
			const code = await readFile(importer, 'utf8');
			const required = new Set();
			walk.simple(
				acorn.parse(code, {
					sourceType: 'module',
					ecmaVersion: 8
				}),
				{
					ImportDeclaration(node) {
						if (node.source.value === 'j0') {
							for (const {imported: {name}} of node.specifiers) {
								required.add(name);
							}
						}
					}
				}
			);
			const lines = [];
			for (const name of required) {
				let j0ModulePath;
				try {
					j0ModulePath = require.resolve(`../lib/${name}`);
				} catch (error) {
					j0ModulePath = path.join(windowFallback, name);
				}
				lines.push(`import ${name} from '${j0ModulePath}'\nexport {${name}};`);
			}
			return lines.join('\n');
		}
	};
}

module.exports = rollupPlugin;

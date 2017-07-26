const path = require('path');
const fs = require('fs');
const acorn = require('acorn');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const {createFilter} = require('rollup-pluginutils');

function rollupPlugin(options = {}) {
	const {include, exclude} = options;
	const filter = createFilter(include, exclude);
	const windowFallback = path.join(__dirname, 'window-fallback');
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
			return path.join(__dirname, importer);
		},
		load: async (id) => {
			if (!id.startsWith(__dirname)) {
				return;
			}
			if (0 <= id.indexOf(windowFallback)) {
				const name = id.split(windowFallback).pop()
				.slice(1);
				return `const x = ${name};\nexport default x;`;
			}
			const importer = path.relative(__dirname, id).replace(/^([^/])/, '/$1');
			const code = await readFile(importer, 'utf8');
			const ast = acorn.parse(code, {
				sourceType: 'module',
				ecmaVersion: 8
			});
			const required = [];
			ast.body
			.filter(({type, source}) => {
				return type === 'ImportDeclaration' && source.value === 'j0';
			})
			.forEach((declaration) => {
				for (const {imported} of declaration.specifiers) {
					required.push(imported.name);
				}
			});
			const lines = required
			.map((name) => {
				let j0ModulePath;
				try {
					j0ModulePath = require.resolve(`../lib/${name}`);
				} catch (error) {
					j0ModulePath = path.join(windowFallback, name);
				}
				return `import ${name} from '${j0ModulePath}'\nexport {${name}};`;
			});
			return lines.join('\n');
		}
	};
}

module.exports = rollupPlugin;

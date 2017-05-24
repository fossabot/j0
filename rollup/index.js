const path = require('path');
const fs = require('fs');
const acorn = require('acorn');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const {createFilter} = require('rollup-pluginutils');

function rollupPlugin(options = {}) {
	const {include, exclude} = options;
	const filter = createFilter(include, exclude);
	return {
		resolveId: (importee, importer) => {
			if (!filter(importee) || importee !== 'j0') {
				return null;
			}
			return path.join(__dirname, importer);
		},
		load: async (id) => {
			if (!id.startsWith(__dirname)) {
				return;
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
				try {
					const j0ModulePath = require.resolve(`../${name}`);
					return `import ${name} from '${j0ModulePath}'\nexport {${name}};`;
				} catch (error) {
					return `export {${name}};`;
				}
			});
			return lines.join('\n');
		}
	};
}

module.exports = rollupPlugin;

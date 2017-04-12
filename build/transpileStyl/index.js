const fs = require('fs');
const stylus = require('stylus');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const changeExt = require('j1/changeExt');
const readFile = promisify(fs.readFile, fs);

const autoprefixerOptions = {browsers: ['last 2 versions']};

async function compileCSS(src, dest) {
	const stylusCode = await readFile(src, 'utf8');
	const cssCode = await promisify(stylus.render, stylus)(stylusCode, {filename: src});
	const {css} = await postcss([autoprefixer(autoprefixerOptions)]).process(cssCode);
	return writeFile(changeExt(dest, '.css'), css);
}

module.exports = compileCSS;

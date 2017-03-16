const fs = require('fs');
const stylus = require('stylus');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const readFile = promisify(fs.readFile, fs);

const autoprefixerOptions = {browsers: ['last 2 versions']};

function compileCSS(src, dest) {
	return readFile(src, 'utf8')
	.then((stylusCode) => {
		return promisify(stylus.render, stylus)(stylusCode, {filename: src});
	})
	.then((cssCode) => {
		return postcss([autoprefixer(autoprefixerOptions)]).process(cssCode);
	})
	.then(({css}) => {
		return writeFile(dest, css);
	});
}

module.exports = compileCSS;

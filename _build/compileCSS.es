const path = require('path');
const fs = require('fs');
const stylus = require('stylus');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const readFile = promisify(fs.readFile, fs);

const srcPath = path.join(__dirname, 'page.styl');
const destPath = path.join(__dirname, '..', 'docs', 'page.css');
const autoprefixerOptions = {browsers: ['last 2 versions']};

function compileCSS() {
	return readFile(srcPath, 'utf8')
	.then((stylusCode) => {
		return promisify(stylus.render, stylus)(stylusCode, {filename: srcPath});
	})
	.then((cssCode) => {
		return postcss([autoprefixer(autoprefixerOptions)]).process(cssCode);
	})
	.then(({css}) => {
		console.log(css);
		return writeFile(destPath, css);
	});
}

module.exports = compileCSS;

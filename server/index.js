const fs = require('fs');
const path = require('path');
const url = require('url');
const http = require('http');

const chokidar = require('chokidar');

const debounce = require('j1/lib/debounce');
const callbackPromise = require('j1/lib/callbackPromise');
const readStream = require('j1/lib/readStream');
const ThrottledPipe = require('j1/lib/ThrottledPipe');
const onError = require('j1/lib/onError');
const listen = require('j1/lib/listen');
const args = require('j1/lib/args');
const log = require('j1/lib/log')('server');
const mimeType = require('j1/lib/mimeType');
const writeFile = require('j1/lib/writeFile');

const compile = require('./compile');
const documentRoot = __dirname;

[
	['text/html', '.html'],
	['application/json', '.json'],
	['application/javascript', '.js'],
	['text/css', '.css'],
	['image/jpeg', '.jpg'],
	['image/jpeg', '.jpeg'],
	['image/png', '.png'],
	['image/svg', '.svg']
].forEach((type) => {
	mimeType.register(...type);
});

listen(http.createServer(), args.port || 3000).then((server) => {
	const io = require('socket.io')(server);
	const reload = debounce(() => {
		log.info('reload');
		io.sockets.emit('reload');
	});
	server.on('request', (req, res) => {
		let reqPath = url.parse(req.url).pathname;
		if (/\/$/.test(reqPath)) {
			reqPath = path.join(reqPath, 'index.html');
		}
		if (/socket\.io/.test(reqPath)) {
			return;
		} else if (/http-test/.test(reqPath)) {
			readStream(req).then((buffer) => {
				res.writeHead(200, {
					'Content-Type': 'text/plain',
					'Content-Length': buffer.length
				});
				new ThrottledPipe(1000)
					.on('data', (chunk) => {
						res.write(chunk);
					})
					.on('end', () => {
						res.end();
					})
					.push(buffer)
					.end();
			});
		} else {
			reqPath = path.join(documentRoot, reqPath);
			callbackPromise((callback) => {
				fs.stat(reqPath, callback);
			}).then((stat) => {
				res.writeHead(200, {
					'Content-Type': mimeType(reqPath),
					'Content-Length': stat.size
				});
				fs.createReadStream(reqPath)
					.on('error', () => {
						res.statusCode = 404;
						res.end();
					})
					.pipe(res);
			});
		}
	});
	chokidar
		.watch([
			path.join(documentRoot, '..', 'lib', '**', '*.js'),
			path.join(documentRoot, '..', 'test', '**', '*.js')
		])
		.on('all', debounce(() => {
			const testDir = path.join(documentRoot, '..', 'test');
			const tempFile = path.join(documentRoot, 'compiled-src.js');
			Promise.all([
				callbackPromise((callback) => {
					fs.readdir(testDir, callback);
				}),
				callbackPromise((callback) => {
					fs.readFile(path.join(documentRoot, 'src.js'), callback);
				})
			]).then((results) => {
				var [files, template] = results;
				return writeFile(tempFile, template.toString().replace('/* MODULES */', files.map((file) => {
					return `require('../test/${file}');`;
				}).join('\n')));
			}).then(() => {
				return compile({
					entries: [tempFile]
				});
			}).then((buffer) => {
				return writeFile(path.join(documentRoot, 'compiled-app.js'), buffer);
			}).then(reload).catch(onError);
		}, 200));
}).catch(onError);

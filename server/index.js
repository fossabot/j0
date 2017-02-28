const fs = require('fs');
const path = require('path');
const url = require('url');
const http = require('http');
const Readable = require('stream').Readable;

const chokidar = require('chokidar');
const args = require('minimist')(process.argv.slice(2));

const debounce = require('j1/debounce');
const promisify = require('j1/promisify');
const readStream = require('j1/readStream');
const Throttled = require('j1/Throttled');
const onError = require('j1/onError');
const listen = require('j1/listen');
const console = require('j1/console').create('server');
const mime = require('j1/mime');
const writeFile = require('j1/writeFile');
const stat = promisify(fs.stat, fs);
const readFile = promisify(fs.readFile, fs);
const glob = promisify(require('glob'));

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
	mime.add(...type);
});

listen(http.createServer(), args.port || 3000).then((server) => {
	const io = require('socket.io')(server);
	const reload = debounce(() => {
		console.info('reload');
		io.sockets.emit('reload');
	}, 100);
	server.on('request', (req, res) => {
		let reqPath = url.parse(req.url).pathname;
		if (/\/$/.test(reqPath)) {
			reqPath = path.join(reqPath, 'index.html');
		}
		if (/socket\.io/.test(reqPath)) {
			return;
		} else if (/http-test/.test(reqPath)) {
			readStream(req).then((buffer) => {
				const stream = new Readable();
				res.writeHead(200, {
					'Content-Type': 'text/plain',
					'Content-Length': buffer.length
				});
				stream.pipe(
					new Throttled(1000)
						.on('data', (chunk) => {
							res.write(chunk);
						})
						.on('end', () => {
							res.end();
						})
				);
				stream
					.write(buffer)
					.end();
			});
		} else {
			reqPath = path.join(documentRoot, reqPath);
			stat(reqPath)
				.then((stat) => {
					res.writeHead(200, {
						'Content-Type': mime(reqPath),
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
			path.join(documentRoot, '..', 'mod', '**', '*.js'),
			path.join(documentRoot, '..', 'test', '**', '*.js')
		])
		.on('all', debounce(() => {
			const testDir = path.join(documentRoot, '..', 'test');
			const tempFile = path.join(documentRoot, 'compiled-src.js');
			Promise.all([
				glob(path.join(testDir, '**', '*.js')),
				readFile(path.join(documentRoot, 'src.js'))
			])
				.then((results) => {
					var [files, template] = results;
					return writeFile(tempFile, template.toString().replace('/* MODULES */', files.map((file) => {
						return `require('../test/${path.relative(testDir, file)}');`;
					}).join('\n')));
				})
				.then(() => {
					return compile({
						entries: [tempFile]
					});
				})
				.then((buffer) => {
					return writeFile(path.join(documentRoot, 'compiled-app.js'), buffer);
				})
				.then(reload)
				.catch(onError);
		}, 200));
}).catch(onError);

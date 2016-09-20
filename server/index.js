require('http').createServer()
	.on('listening', function () {
		const fs = require('fs');
		const path = require('path');
		const url = require('url');
		const chokidar = require('chokidar');
		const io = require('socket.io')(this);

		const debounce = require('./lib/debounce');
		const callbackPromise = require('./lib/callbackPromise');
		const readStream = require('./lib/readStream');
		const ThrottledPipe = require('./lib/ThrottledPipe');

		const compile = require('./compile');
		const documentRoot = __dirname;

		console.log('listening ' + this.address().port);

		this.on('request', (req, res) => {
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
					let type = {
						'.html': 'text/html',
						'.json': 'application/json',
						'.js': 'application/javascript',
						'.css': 'text/css',
						'.jpg': 'image/jpeg',
						'.jpeg': 'image/jpeg',
						'.png': 'image/png',
						'.svg': 'image/svg'
					}[path.extname(reqPath)];
					if (!type) {
						type = 'text/plain';
					}
					res.writeHead(200, {
						'Content-Type': type,
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
				path.join(documentRoot, '../lib'),
				path.join(documentRoot, '../test')
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
					return callbackPromise((callback) => {
						var [files, template] = results;
						fs.writeFile(tempFile, template.toString().replace('/* MODULES */', files.map((file) => {
							return 'require(\'../test/' + file + '\');';
						}).join('\n')), callback);
					});
				}).then(() => {
					return compile({
						entries: [tempFile]
					});
				}).then((buffer) => {
					callbackPromise((callback) => {
						fs.writeFile(path.join(documentRoot, 'compiled-app.js'), buffer, callback);
					});
				}).then(() => {
					io.sockets.emit('reload');
				}).catch((error) => {
					if (error && error.stream) {
						error.stream = 'Removed by script';
					}
					console.error(error);
				});
			}, 200));
	})
	.on('error', function (error) {
		switch (error && error.code) {
			case 'EADDRINUSE':
			case 'EACCES':
				if (error.port < 0xffff) {
					this.listen(error.port + 1);
				} else {
					throw error;
				}
				break;
			default:
				throw error;
		}
	})
	.listen(3000);

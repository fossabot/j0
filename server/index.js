require('http').createServer()
	.on('listening', function () {
		const fs = require('fs');
		const path = require('path');
		const url = require('url');
		const chokidar = require('chokidar');
		const io = require('socket.io')(this);
		const compile = require('./compile');
		const debounce = require('./debounce');
		const callbackPromise = require('./callbackPromise');
		const documentRoot = __dirname;
		console.log('listening ' + this.address().port);
		this.on('request', (req, res) => {
			switch (req.method) {
				case 'GET':
					let reqPath = url.parse(req.url).pathname;
					if (/\/$/.test(reqPath)) {
						reqPath = path.join(reqPath, 'index.html');
					}
					if (/socket\.io/.test(reqPath)) {
						return;
					} else {
						fs.createReadStream(path.join(documentRoot, reqPath))
							.on('error', () => {
								res.statusCode = 404;
								res.end();
							})
							.pipe(res);
					}
					break;
				default:
					res.statusCode = 405;
					res.end('405 Method Not Allowed: ' + req.method);
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
				});
			}, 200));
	})
	.on('error', (error) => {
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

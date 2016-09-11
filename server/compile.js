const browserify = require('browserify');
module.exports = (config) => {
	const bundle = (bundler) => {
		return new Promise((resolve, reject) => {
			bundler
				.once('error', reject)
				.once('bundle', function (bundle) {
					const data = [];
					let dataLength = 0;
					bundle
						.on('data', function (chunk) {
							data.push(chunk);
							dataLength += chunk.length;
						})
						.once('error', reject)
						.once('end', function () {
							resolve(Buffer.concat(data, dataLength));
						});
				})
				.bundle();
		});
	};
	const bundler = browserify(config)
		.on('update', function () {
			bundle(this);
		})
		.on('close', function () {
			this.on('time', function () {
				this.close();
			});
		});
	return bundle(bundler);
};

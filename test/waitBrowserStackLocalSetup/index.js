async function waitBrowserStackLocalSetup(bsLocal) {
	await new Promise((resolve) => {
		let count = 0;
		function check() {
			if (bsLocal.isRunning()) {
				resolve();
			} else if (count++ < 100) {
				setTimeout(check, 200);
			} else {
				throw new Error('Failed to start browserstack-local');
			}
		}
		check();
	});
}

module.exports = waitBrowserStackLocalSetup;

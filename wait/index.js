function wait(duration, data) {
	return new Promise(function (resolve) {
		setTimeout(resolve, duration);
	})
	.then(function () {
		return data;
	});
}
export default wait;

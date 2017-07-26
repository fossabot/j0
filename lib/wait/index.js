async function wait(duration, data) {
	await new Promise(function (resolve) {
		setTimeout(resolve, duration);
	});
	return data;
}
export default wait;

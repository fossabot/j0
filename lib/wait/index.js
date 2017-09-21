import {
	Promise,
	setTimeout,
} from 'j0';
async function wait(duration, data) {
	await new Promise(function (resolve) {
		setTimeout(resolve, duration);
	});
	return data;
}
export default wait;

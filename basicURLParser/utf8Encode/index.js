import UTF8 from '../../Encoding/UTF8';
function utf8Encode(stream) {
	const output = [];
	UTF8.Encoder.run(stream, output);
	return output;
}
export default utf8Encode;

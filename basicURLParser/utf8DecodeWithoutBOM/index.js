import UTF8 from '../../Encoding/UTF8';
function utf8DecodeWithoutBOM(stream) {
	const output = [];
	UTF8.Decoder.run(stream, output);
	return output;
}
export default utf8DecodeWithoutBOM;

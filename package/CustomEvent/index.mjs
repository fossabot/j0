let Event = CustomEvent;
try {
	new Event('G');
} catch (error) {
	Event = null;
}
export default Event;

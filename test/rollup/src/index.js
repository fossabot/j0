import {
	window,
	assign,
	hello
} from 'rollupPluginTest';
assign(
	window,
	{hello: hello}
);

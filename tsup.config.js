import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ["./src/index.js"],
	sourcemap: true,
	clean: true,
	dts: false,
	format: ['esm', 'cjs'],
	external: [],
	minify: false,
});

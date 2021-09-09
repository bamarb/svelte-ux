module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.html', './src/**/*.svelte', './src/**/*.md']
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
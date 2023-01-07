/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				'brand-blue': '#1c64a0'
			}
		}
	},
	plugins: []
};

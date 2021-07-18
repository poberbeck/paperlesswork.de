module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
	darkMode: 'media', 
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		screens: {
			md: '820px',
		},
		colors: {
			blue: '#4170e8',
			white: '#FFFFFF',
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
		},
	},
	plugins: [],
};

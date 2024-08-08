/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		screens: {
			md: '820px',
		},
		colors: {
			blue: '#3D58B8',
			white: '#FFFFFF',
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};

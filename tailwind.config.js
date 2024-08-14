/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '820px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		colors: {
			blue: '#4170e8',
			white: '#FFFFFF',
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			afacad: ['Afacad', 'sans-serif'],
		},
		extend: {
			maxWidth: {
				'8xl': '90rem',
			},
			backgroundImage: {
				'hero-img': 'url(/images/hero-img.jpg)',
			},
		},
	},
	plugins: [],
};

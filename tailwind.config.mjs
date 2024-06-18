/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'finalSixHeavy': ['FinalSix Heavy', 'sans-serif'],
			'finalSixThin': ['FinalSix Thin', 'sans-serif'],
			'finalSixBook': ['FinalSix Book', 'sans-serif'],
			'finalSixExtraBold': ['FinalSix ExtraBold', 'sans-serif'],
			'finalSixBold': ['FinalSix Bold', 'sans-serif'],
			'finalSixHairline': ['FinalSix Hairline', 'sans-serif'],
			'finalSixBlack': ['FinalSix Black', 'sans-serif'],
			'finalSixLight': ['FinalSix Light', 'sans-serif'],
			'finalSixMedium': ['FinalSix Medium', 'sans-serif'],
		},
		colors : {
			'green' : '#00BF63',
			'lightGrey' : '#E2E2E2',
			'grey' : '#F3F3F3',
			'darkGrey' : '#9E9E9E',
			'black' : '#000000',
			'white' : '#FFFFFF',
		},
		extend: {},
	},
	plugins: [],
}

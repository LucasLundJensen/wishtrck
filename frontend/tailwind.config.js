module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./components/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./pages/*.{js,ts,jsx,tsx}",
		"./layouts/**.{js,ts,jsx,tsx}",
		"./layouts/*.{js,ts,jsx,tsx}",
	],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: {
					100: "#ABABAB",
					200: "#9C9C9C",
					400: "#3C3C3C",
					500: "#313131",
					800: "#232323",
					900: "#111111",
				},
				blue: {
					primary: "#4770C4",
					light: "#3999F4",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

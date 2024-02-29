/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					softRed: "hsl(7, 99%, 70%)",
					yellow: "hsl(51, 100%, 49%)",
					darkDesaturatedCyan: "hsl(167, 40%, 24%)",
					darkBlue: "hsl(198, 62%, 26%)",
					darkModerateCyan: "hsl(168, 34%, 41%)",
				},
				neutral: {
					veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
					veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
					darkGrayishBlue: "hsl(232, 10%, 55%)",
					grayishBlue: "hsl(210, 4%, 67%)",
				},
			},
			backgroundImage: {
				"header-mobile": "url('/images/mobile/image-header.jpg')",
				"header-desktop": "url('/images/desktop/image-header.jpg')",
			},
			fontFamily: {
				barlow: ["Barlow", "sans-serif"],
				fraunces: ["Fraunces", "serif"],
			},
		},
	},
	plugins: [],
};

/*
- Soft red: hsl(7, 99%, 70%)
- Yellow: hsl(51, 100%, 49%)
- Dark desaturated cyan (graphic design text): hsl(167, 40%, 24%)
- Dark blue (photography text): hsl(198, 62%, 26%)
- Dark moderate cyan (footer): hsl(168, 34%, 41%)

### Body Copy

- Font size: 18px

### Font

- Family: [Barlow](https://fonts.google.com/specimen/Barlow)
- Weights: 600
- Family: [Fraunces](https://fonts.google.com/specimen/Fraunces)
- Weights: 700, 900

## Icons

We provide the required social icons. But, if you prefer, you can use a font icon library. Some suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)
*/

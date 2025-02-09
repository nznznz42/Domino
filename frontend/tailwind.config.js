/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			base: '2px'
  		},
  		colors: {
  			main: '#FD9745',
  			overlay: 'rgba(0,0,0,0.8)',

			// Site UI Light Mode
  			bg: '#fff4e0',
  			text: '#000',
  			border: '#000',

			// Site UI Dark Mode
			darkMain: '#f36e03',
			darkNavBg: '#333333',
  			darkBg: '#272933',
  			darkText: '#eeefe9',
  			darkBorder: '#000',
  			secondaryBlack: '#212121',
			darkNavBorder: "#000",

			// Node Colours
			nodeBlue: '#88aaee',
			nodeRed: '#ff6b6b',
			nodeOrange: '#fd9745',
			nodeGreen: '#a3e636',
			nodeYellow: '#ffdc58',
			nodePurple: '#a388ee',
  		},
  		boxShadow: {
  			light: '-4px 4px 0px 0px #000',
  			dark: '-4px 4px 0px 0px #000',
			nav: "4px 4px 0px 0px #000",
			navDark: "4px 4px 0px 0px #000",
  		},
  		translate: {
  			boxShadowX: '-4px',
  			boxShadowY: '4px',
  			reverseBoxShadowX: '4px',
  			reverseBoxShadowY: '-4px'
  		},
  		fontWeight: {
  			base: '500',
  			heading: '700'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

// TODO: add bigger palette and reorganise
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			primary: '#1F2222',
    			bgCards: '#D3D3D3',
    			fofalText: '#0D1115',
    			fofalYellow: '#C98026'
    		},
    		fontFamily: {
    			brandon: [
    				'Brandon',
    				'sans-serif'
    			],
    			'brandon-300': [
    				'Brandon-light',
    				'sans-serif'
    			],
    			'brandon-400': [
    				'Brandon-regular',
    				'sans-serif'
    			],
    			'brandon-500': [
    				'Brandon-medium',
    				'sans-serif'
    			],
    			'brandon-800': [
    				'Brandon-bold',
    				'sans-serif'
    			],
    			'brandon-900': [
    				'Brandon-black',
    				'sans-serif'
    			]
    		},
    		maxWidth: {
    			container: '1440px'
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


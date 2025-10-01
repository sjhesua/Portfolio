/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'custom': '1267px',
				'lg': '1267px',
			},
			colors: {
				'gray': {
					'50': '#fff',
					'100': '#EBEBF2',//
					'200': '#b7e2ea',
					'300': '#85cbdb',
					'400': '#BBBBBF',//
					'500': '#3190a9',
					'600': '#286c84',
					'700': '#89898C',//
					'800': '#252526',//
					'900': '#264453',
					'950': '#252627',
					'950-50': 'rgba(20, 44, 56, 0.50)',
				},
				fontFamily: {
					'sans': ['Fira Code', 'monospace']
				  }
			},
		},
	},
	plugins: [],
}

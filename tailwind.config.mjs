/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        local_background_primary: '#FFFFFF',
        local_background_secondary: '#EA6733',
        local_background_tertiary: '#E7E7E7',
        local_background_quaternary: '#00A082',
        local_title_primary: '#EE5C2F',
        local_title_secondary: '#00A082',
        local_title_tertiary: '#FFFFFF',
        local_title_quaternary: '#000000',
        local_subtitle_primary: '#FFFFFF',
        local_subtitle_secondary: '#8D8C8C',
        local_text_primary: '#FFFFFF',
        local_text_secondary: '#00000',
        local_text_tertiary: '#6c757d',
        local_border_primary: '#E7E7E7',
				local_accent_primary: '#FFFFFF',
				local_icons_primary: '#000000',
				local_icons_secondary: '#00A082',
      },
    },
  },
  plugins: [],
}

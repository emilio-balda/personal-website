import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none transition duration-200 ease-in-out hover:opacity-100 hover:text-primary-700 hover:dark:text-primary-500 text-paragraph dark:text-background-100'],
    ['text-app-paragraph', 'text-paragraph dark:text-background-100'],
    ['bg-app-paragraph', 'bg-paragraph dark:bg-background-100'],
    ['text-app-background', 'text-background-100 dark:text-background-900'],
    ['bg-app-background', 'bg-background-100 dark:bg-background-900'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  theme: {
    colors: {
      primary: {
        300: '#00FF90', // class="bg-primary-300"
        500: '#58FEB6', // class="bg-primary-500"
        700: '#24BEA2', // class="bg-primary-700"
        900: '#00846C',
      },
      secondary: {
        500: '#4D8DFC', // class="bg-secondary-500"
        900: '#003ba0', // class="bg-secondary-900"
      },
      background: {
        100: '#F8F9FC', // class="bg-background-100"
        900: '#15212c', // class="bg-background-900"
      },
      linkedin: '#3074b2', // class="bg-linkedin"
      paragraph: '#374151', // class="bg-paragraph"
    },
  },
})

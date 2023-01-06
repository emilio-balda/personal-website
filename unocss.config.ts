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
    ['text-app', 'text-paragraph dark:text-background-100'],
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
      },
      secondary: '#4D8DFC',
      background: {
        100: '#F8F9FC',
        900: '#15212c',
      },
      linkedin: '#3074b2',
      paragraph: '#374151',
    },
  },
})

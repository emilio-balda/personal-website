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
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary-500'],
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
        300: '#76dfc7', // class="bg-accent-300"
        500: '#5CCBB2', // class="bg-accent-500"
        700: '#47706d', // class="bg-accent-700"
      },
      secondary: {
        300: '#91deeb', // class="bg-primary-300"
        500: '#8AD3DF', // class="bg-primary-500"
        700: '#69B8C6', // class="bg-primary-700"
      },
      accent: {
        300: '#f0abf9', // class="bg-secondary-300"
        500: '#e791d9', // class="bg-secondary-500"
        700: '#CE71BF', // class="bg-secondary-700"
      },
      background: {
        200: '#5A7DB1',
        300: '#435C81',
        500: '#293f51',
        700: '#16242f',
        900: '#15212c',
      },
      linkedin: '#3074b2',
    },
  },
})

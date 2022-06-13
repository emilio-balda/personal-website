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
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-emerald-500'],
    ['bg-card', 'dark:bg-gradient-to-t dark:from-slate-900 dark:to-white/0'],
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
        500: '#76dfc7', // class="bg-accent-500"
        700: '#47706d', // class="bg-accent-700"
      },
      secondary: {
        300: '#91deeb', // class="bg-primary-300"
        500: '#5a7db1', // class="bg-primary-500"
        700: '#5a7db1', // class="bg-primary-700"
      },
      accent: {
        300: '#f0abf9', // class="bg-secondary-300"
        500: '#e791d9', // class="bg-secondary-500"
        700: '#e791d9', // class="bg-secondary-700"
      },
      background: {
        300: '#293f51', // class="bg-background-300"
        500: '#16242f', // class="bg-background-500"
        700: '#15212c', // class="bg-background-700"
      },
    },
  },
})

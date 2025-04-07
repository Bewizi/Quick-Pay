// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-05',
  devtools: { enabled: true },
  css:['~/assets/css/main.css'],
  image: {
    dir: 'public/images'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image']
})
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      'postcss-nesting': {}
    }
  },
  alias: {
    '@': resolve(__dirname, '/')
  },
  css: ['~/assets/main.scss']
})

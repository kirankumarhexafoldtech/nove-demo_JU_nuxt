// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
 
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/scss/argon-dashboard.scss",
    "~/assets/scss/argon-dashboard.scss",
    "~/assets/css/nucleo-icons.css",
    "~/assets/css/custom.css",
    

  ],
 
})

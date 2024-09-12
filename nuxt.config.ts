// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: 'The Coffee Movement', 
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700'
        },
      ], 
    },
  },

  devtools: { enabled: true },

  css: [
    '~/assets/styles/global.css'
  ]

})
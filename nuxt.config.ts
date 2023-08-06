// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Yari's Teamwork Test App",
      meta: [
        { charset: 'utf-16' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'color-scheme', content: 'light' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      url: process.env.URI,
    },
  },
});

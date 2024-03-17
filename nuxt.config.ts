// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@morev/vue-transitions/nuxt',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  headlessui: {
    prefix: "H"
  },
  app: {
    head: {
      title: 'Analytics',
      link: [
        { rel: "icon", type: "image/x-icon", href: "/icon.svg" },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        { rel: 'preconnect', href: 'https://rsms.me/' },
      ]
    }
  }
})

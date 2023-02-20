const containerQueryPolyfill = `if (!("container" in document.documentElement.style)) {import("https://unpkg.com/container-query-polyfill@^0.2.0");}`


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  privateRuntimeConfig: {
    apiKey: process.env.API_KEY,
    serviceId: process.env.SERVICE_DOMAIN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tanigaki-corporate',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'module',
        hid: 'containerQueryPolyfill',
        innerHTML: containerQueryPolyfill
      },
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js' },
      { src: 'https://pixijs.download/release/pixi.js' },
      // { src: 'https://sdk.form.run/js/v2/embed.js%22%3E' }
      
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'containerQueryPolyfill': ['innerHTML'],
    },
    
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/stylus/style.styl' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/globalSet', mode: 'client' },
    { src: '~/plugins/spanWrap', mode: 'client' },
    { src: '~/plugins/VueModalTor', mode: 'client' },
    // { src: '~/plugins/pixiPlugins', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: '@/components/',
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules:
  [
    "@nuxtjs/axios",
    'nuxt-microcms-module',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-gtag',
  ],
  "google-gtag": {
    id: process.env.GTM_ID,
    debug: true
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
      // vendor: ['pixi.js']
  },
  loading: '~/components/common/c-loadigSet01/c-loadigSet01.vue',
  // router: {
  //   scrollBehavior: function (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   }
  // },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/achievements/:p',
        component: resolve(__dirname, 'pages/achievements/index.vue'),
        name: 'achievementsPage',
      }),
      routes.push({
        path: '/news/:p',
        component: resolve(__dirname, 'pages/news/index.vue'),
        name: 'newsPage',
      })
    },
  },
  // gtm: {
  //   id: process.env.GTM_ID,
  //   debug: true, // Enable to track in dev mode.
  //   pageTracking: true,
  // },
  // // 動的変数を使う場合（本番と分ける時など）には追加
  // publicRuntimeConfig: {
  //   gtm: {
  //     id: process.env.GTM_ID,
  //     pageTracking: true,
  //   }
  // }
}

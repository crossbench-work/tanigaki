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
  ],
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
  }
}

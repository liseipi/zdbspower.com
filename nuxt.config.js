export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '中电保胜电力科技有限公司',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '中电保胜电力科技有限公司' },
      { hid: 'description', name: 'description', content: '中电保胜科技有限公司总部设立于广东广州。是高新技术型民营企业，主要从事电厂配套设备的生产和销售。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'baidu-site-verification', content: 'code-zOBdXOSZhl' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/css.css',
    '@/assets/style/web.css',
    '@/assets/style/swiper.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@assets/script/jquery.min'},
    {src: '@assets/script/swiper.min'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Define the dist directory for your Nuxt application
  generate: {
    dir: 'docs'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
      json: ({ isDev }) => isDev ? '[name].json' : '[name].json',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
    },
  }
}

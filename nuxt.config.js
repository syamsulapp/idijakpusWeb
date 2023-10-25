export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  //mau jalanin .env harus dibuatkan config terlebih dahulu agar environtmentnya jalan
  env: {
    url: process.env.NUXT_ENV_URLIDI,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Idi Cabang Jakarta Pusat",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Idijakpus Website Terbaru",
      },
      {
        name: "keywords",
        content: "Idijakpus Website Terbaru",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "shortcut icon",
        sizes: "16x16",
        href: "/assets/img/idi-logo.svg",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap",
      },
    ],
    script: [
      { src: "/assets/js/lib/pace.js" },
      { src: "/assets/js/lib/bootstrap.bundle.min.js" },
      { src: "/assets/js/lib/mixitup.min.js" },
      { src: "/assets/js/lib/wow.min.js" },
      { src: "/assets/js/lib/html5shiv.min.js" },
      { src: "/assets/js/main.js", ssr: false },
    ],
    paths: {
      "@/*": ["src/*"],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/styles/globals.css", "~/styles/preloader.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vueAwesomeSwiper.js",
    { src: "~/plugins/lightGallery.client.js", ssr: false },
    { src: "~/plugins/vueRangeSlider.js", ssr: false },
  ],

  routes: [
    { src: "/_nuxt/.+", headers: { "cache-control": "s-maxage=31536000" } },
    { src: "/(.*)", dest: "/" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/router"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", ["vue-scrollto/nuxt", { duration: 1000 }]],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    splitChunks: {
      layouts: true,
    },
  },
};

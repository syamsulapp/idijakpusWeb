<template>
  <div>
    <PreLoader />
    <main>
      <Nuxt />
    </main>
    <ScrollToTop />
  </div>
</template>

<script>
import PreLoader from "../components/PreLoader/index.vue";
import ScrollToTop from "../components/ScrollToTop/index.vue";
// import Navbar from '../components/Navbars/PreviewNav';

export default {
  components: {
    PreLoader,
    ScrollToTop,
  },
  head() {
    return {
      link: [
        { rel: "stylesheet", href: "/assets/css/lib/bootstrap-icons.css" },
        { rel: "stylesheet", href: "/assets/css/lib/swiper.min.css" },
        { rel: "stylesheet", href: "/assets/css/lib/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/lib/all.min.css" },
        { rel: "stylesheet", href: "/assets/css/lib/animate.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        { rel: "stylesheet", href: "/landing-preview/css/preview-style.css" },
      ],
      script: [{ src: "/landing-preview/js/parallax.min.js" }],
    };
  },
};
</script>

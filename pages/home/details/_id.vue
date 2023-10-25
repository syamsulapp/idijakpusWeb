<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="blog-page style-5 color-5">
      <AllNews styleType="5" />
      <PopularPosts styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";
import TopNav from "../../../src/layouts/TopNav";
import Navbar from "../../../src/layouts/Navbar";
import AllNews from "../../../src/components/detailContent/AllNews.vue";
import PopularPosts from "../../../src/components/detailContent/PopularPosts.vue";
import Footer from "../../../src/layouts/Footer";

export default {
  name: "PageSinglePost5",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    AllNews,
    PopularPosts,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - Kegiatan",
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>

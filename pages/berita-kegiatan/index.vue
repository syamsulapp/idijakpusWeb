<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="blog-page style-5 color-5">
      <BlogSlider styleType="5" />
      <PopularPosts styleType="5" />
      <AllNews styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from "../../src/layouts/TopNav";
import Navbar from "../../src/layouts/Navbar";
import BlogSlider from "../../src/components/berita-kegiatan/BlogSlider.vue";
import PopularPosts from "../../src/components/berita-kegiatan/popularPost.vue";
import AllNews from "../../src/components/berita-kegiatan/allNews.vue";
import Footer from "../../src/layouts/Footer";

export default {
  name: "PageBlog5",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    BlogSlider,
    PopularPosts,
    AllNews,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - Berita Dan kegiatan",
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>

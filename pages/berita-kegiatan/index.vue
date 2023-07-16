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
import TopNav from "../../components/Navbars/DigitalNav/TopNav";
import Navbar from "../../components/Navbars/DigitalNav";
import BlogSlider from "../../components/Blog/BlogSlider";
import PopularPosts from "../../components/Blog/PopularPosts";
import AllNews from "../../components/Blog/AllNews";
import Footer from "../../components/Digital/Footer";

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

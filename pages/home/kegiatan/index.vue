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
import TopNav from "../../../components/Navbars/DigitalNav/TopNav";
import Navbar from "../../../components/Navbars/DigitalNav";
import AllNews from "../../../components/SinglePost/AllNews";
import PopularPosts from "../../../components/SinglePost/PopularPosts";
import Footer from "../../../components/Digital/Footer";

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
      titleTemplate: "%s - Page Single Post 5",
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>

<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="about-page style-5">
      <AboutHeader />
      <Community />
      <br />
      <br />
      <br />
      <br />
      <ChooseUs />
      <Culture />
    </main>
    <Footer />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from "../../src/layouts/TopNav";
import Navbar from "../../src/layouts/Navbar";
import AboutHeader from "../../src/components/galeri/AboutHeader.vue";
import Community from "../../src/components/galeri/Community.vue";
import ChooseUs from "../../src/components/galeri/ChooseUs.vue";
import Culture from "../../src/components/galeri/Culture.vue";
import Footer from "../../src/layouts/Footer";

export default {
  name: "PageAbout5",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    AboutHeader,
    Community,
    ChooseUs,
    Culture,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - Page About 5",
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>

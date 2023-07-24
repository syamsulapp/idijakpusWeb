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
import TopNav from "../../components/Navbars/DigitalNav/TopNav";
import Navbar from "../../components/Navbars/DigitalNav";
import AboutHeader from "../../components/Saas/AboutHeader";
import Community from "../../components/Saas/Community";
import ChooseUs from "../../components/Saas/ChooseUs";
import Culture from "../../components/Saas/Culture";
import Footer from "../../components/Digital/Footer";

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

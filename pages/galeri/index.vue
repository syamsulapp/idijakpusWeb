<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" />
    <main class="about-page style-5">
      <AboutHeader />
      <Community />
      <Philosophy />
      <ChooseUs />
      <Culture />
      <Team />
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
import Philosophy from "../../components/Saas/Philosophy";
import ChooseUs from "../../components/Saas/ChooseUs";
import Culture from "../../components/Saas/Culture";
import Team from "../../components/Saas/Team";
import Footer from "../../components/Digital/Footer";

export default {
  name: "PageAbout5",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    AboutHeader,
    Community,
    Philosophy,
    ChooseUs,
    Culture,
    Team,
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

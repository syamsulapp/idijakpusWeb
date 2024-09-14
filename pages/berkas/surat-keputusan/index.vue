<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="single-project pt-50 style-5">
      <SuratKeputusan styleType="5" />
      <ScreenshotsSimfoni />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";
import TopNav from "../../../src/layouts/TopNav";
import Navbar from "../../../src/layouts/Navbar";
import SuratKeputusan from "../../../src/components/berkas/surat-keputusan";
import ScreenshotsSimfoni from "../../../src/source/screenshot";
import Footer from "../../../src/layouts/Footer";

export default {
  name: "Surat_Keputusan",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    SuratKeputusan,
    ScreenshotsSimfoni,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - Surat Keputusan",
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>

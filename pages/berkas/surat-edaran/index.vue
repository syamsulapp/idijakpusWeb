<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="single-project pt-50 style-5">
      <Challenge styleType="5" />
      <Screenshots />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";
import TopNav from "../../../src/layouts/TopNav";
import Navbar from "../../../src/layouts/Navbar";
import Challenge from "../../../src/components/berkas/surat-edaran";
import Screenshots from "../../../src/source/screenshot";
import Footer from "../../../src/layouts/Footer";

export default {
  name: "PageSingleProject5",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Challenge,
    Screenshots,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - Anggota Baru",
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>

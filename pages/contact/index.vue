<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="contact-page style-5">
      <Map />
      <Form styleType="5" />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from "../../src/layouts/TopNav";
import Navbar from "../../src/layouts/Navbar";

import Form from "../../src/components/contact/Form.vue";
import Map from "../../src/components/contact/Map.vue";
import Footer from "../../src/layouts/Footer";

export default {
  name: "Contact Idi Jakpus",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    Form,
    Map,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - Hubungi Kami",
    };
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef.$el);
  },
};
</script>

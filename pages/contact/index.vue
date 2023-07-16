<template>
  <div>
    <TopNav styleType="5" />
    <Navbar ref="navbarRef" :isTransparent="true" />
    <main class="contact-page style-5">
      <Form styleType="5" />
      <Map />
    </main>
    <Footer :noWave="true" />
  </div>
</template>

<script>
import navbarScrollEffect from "../../common/navbarScrollEffect";
import TopNav from "../../components/Navbars/DigitalNav/TopNav";
import Navbar from "../../components/Navbars/DigitalNav";
import Form from "../../components/Contact/Form";
import Map from "../../components/Contact/Map";
import Footer from "../../components/Digital/Footer";

export default {
  name: "PageContact5",
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

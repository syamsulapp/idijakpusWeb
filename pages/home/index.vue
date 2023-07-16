<template>
  <div>
    <TopNav />
    <Navbar />
    <main class="blog-page style-5 color-5">
      <BlogSlider styleType="5" />
    </main>
    <Header />
    <main>
      <Services />
      <Portfolio />
      <Blog />
      <Webinar />
    </main>
    <Footer />
  </div>
</template>

<script>
import TopNav from "../../components/Navbars/DigitalNav/TopNav";
import Navbar from "../../components/Navbars/DigitalNav";
import Header from "../../components/Digital/Header";
import BlogSlider from "../../components/Blog/BlogSlider";
import Services from "../../components/Digital/Services";
import Portfolio from "../../components/Digital/Portfolio";
import Blog from "../../components/Digital/Blog";
import Webinar from "../../components/Digital/Webinar";
import Footer from "../../components/Digital/Footer";

export default {
  name: "idijakartapusat",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    BlogSlider,
    Header,
    Services,
    Portfolio,
    Blog,
    Webinar,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s - home",
    };
  },
};
</script>

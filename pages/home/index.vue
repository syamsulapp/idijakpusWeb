<template>
  <div>
    <TopNav />
    <Navbar />
    <main class="blog-page style-5 color-5">
      <BlogSlider styleType="5" />
    </main>
    <Header />
    <main>
      <!-- <About /> -->
      <Services />
      <!-- <ChooseUs /> -->
      <Portfolio />
      <!-- <Testimonials /> -->
      <!-- <Team /> -->
      <Blog />
      <Webinar />
      <!-- <Contact /> -->
    </main>
    <Footer />
  </div>
</template>

<script>
import TopNav from "../../components/Navbars/DigitalNav/TopNav";
import Navbar from "../../components/Navbars/DigitalNav";
import Header from "../../components/Digital/Header";
// import About from "../../components/Digital/About";
import BlogSlider from "../../components/Blog/BlogSlider";
import Services from "../../components/Digital/Services";
// import ChooseUs from "../../components/Digital/ChooseUs";
import Portfolio from "../../components/Digital/Portfolio";
// import Testimonials from "../../components/Digital/Testimonials";
// import Team from "../../components/Digital/Team";
import Blog from "../../components/Digital/Blog";
import Webinar from "../../components/Digital/Webinar";
// import Contact from "../../components/Digital/Contact";
import Footer from "../../components/Digital/Footer";

export default {
  name: "idijakartapusat",
  layout: "Main",
  components: {
    TopNav,
    Navbar,
    BlogSlider,
    Header,
    // About,
    Services,
    // ChooseUs,
    Portfolio,
    // Testimonials,
    // Team,
    Blog,
    // Contact,
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

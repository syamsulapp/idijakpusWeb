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
//header
import TopNav from "../../src/layouts/TopNav";
import Navbar from "../../src/layouts/Navbar";
import Header from "../../src/layouts/Header";
//end headr

//content
import BlogSlider from "../../src/components/home/BlogSlider.vue";
import Services from "../../src/components/home/Services.vue";
import Portfolio from "../../src/components/home/Portfolio.vue";
import Blog from "../../src/components/home/Blog.vue";
import Webinar from "../../src/components/home/Webinar.vue";
//end-content

//footer
import Footer from "../../src/layouts/Footer";
//end footr

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

<template>
  <div class="top-navbar style-1">
    <div class="container">
      <div class="content">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="top-links">
              <div class="text text-white">
                <i class="fas fa-bullhorn fa-phone"></i>
                <strong><a href="tel:+62 811-9110-189">+62 811-9110-189</a></strong>
                <span></span>
                <i class="fas fa-bullhorn fa-envelope"></i>
                <strong><a href="mailto:info@idijakpus.or.id">info@idijakpus.or.id</a></strong>
                <span></span>
                <i class="fas fa-bullhorn fa-envelope"></i>
                <strong><a href="mailto:simfonicare@idijakpus.or.id">simfonicare@idijakpus.or.id</a></strong>
                <span></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="r-side">
              <div class="socail-icons">
                <Nuxt-link to="/">
                  <i class="fa fa-map-marker"></i>
                </Nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains("dropdown-toggle")
        ? event.target
        : event.target.querySelector(".dropdown-toggle");
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add("show");
      dropDownMenu?.classList?.add("show");
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains("dropdown")
        ? event.target
        : event.target.closest(".dropdown");
      const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
      const dropDownMenu = dropdown.querySelector(".dropdown-menu");

      dropDownToggler?.classList?.remove("show");
      dropDownMenu?.classList?.remove("show");
    },
  },
};
</script>

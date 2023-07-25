<template>
  <div class="top-navbar style-1">
    <div class="container">
      <div class="content">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="top-links">
              <div class="text text-white">
                <i class="fas fa-bullhorn"></i>
                <strong>Berita Terbaru:</strong>
                <span
                  >Download Aplikasi Simfoni Ver Terbaru
                  <a
                    href="https://m.idijakpus.or.id"
                    class="p-0"
                    target="_blank"
                    ><u>Aplikasi Simfoni?</u></a
                  ></span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="r-side">
              <div class="socail-icons">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
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

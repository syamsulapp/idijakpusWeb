<template>
  <section class="blog section-padding bg-gray style-1" data-scroll-index="6">
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h6 class="color-main text-uppercase wow fadeInUp">Berkas</h6>
            <h2 class="wow fadeInUp">
              Berkas Terbaru
              <span class="fw-normal">Surat Keputusan</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="blog_slider">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide v-for="(surat_keputusan, index) in data" :key="index">
              <div
                class="blog_box"
                @mousemove="showDetails"
                @mouseleave="hideDetails"
              >
                <div class="tags">
                  <a href="#">{{ surat_keputusan.document_category }}</a>
                </div>
                <div class="img">
                  <img :src="imgHandler(surat_keputusan)" alt="" />
                </div>
                <div class="info">
                  <h6>
                    <a :href="surat_keputusan.document_file" target="_blank">{{
                      surat_keputusan.document_title
                    }}</a>
                  </h6>
                  <div class="auther">
                    <span>
                      <i class="bi bi-tags"></i>
                      <small>
                        <a href="#" class="me-1">{{ "Berkas" }}</a>
                      </small>
                    </span>
                    <span>
                      <i class="bi bi-calendar2"></i>
                      <small
                        ><a href="#">{{ surat_keputusan.created_at }}</a></small
                      >
                    </span>
                  </div>
                  <div class="text">
                    {{ surat_keputusan.document_title }} [...]
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import webinars from "../../../../data/Digital/blog.json";
import apis from "../../../../src/api";
export default {
  data() {
    return {
      webinars,
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".blog_slider .swiper-pagination",
        },
        navigation: {
          nextEl: ".blog_slider .swiper-button-next",
          prevEl: ".blog_slider .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          787: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      },
      suratKeputusan: {
        isLoading: false,
        data: null,
      },
    };
  },
  mounted() {
    this.getDataSuratKeputusan();
  },
  computed: {
    data() {
      return this.suratKeputusan.data;
    },
    imgHandler() {
      return (item) => {
        if (item.document_file) {
          if (item.document_file.includes("https")) {
            return require("../../../../static/assets/img/berkasfound.png");
          } else {
            return require("../../../../static/assets/img/berkas_not_found.jpeg");
          }
        } else {
          return require("../../../../static/assets/img/berkas_not_found.jpeg");
        }
      };
    },
  },
  methods: {
    showDetails(event) {
      const detailsEl = event.currentTarget.querySelector(".text");
      detailsEl.style.display = "block";
    },
    hideDetails(event) {
      const detailsEl = event.currentTarget.querySelector(".text");
      detailsEl.style.display = "none";
    },

    async getDataSuratKeputusan() {
      try {
        this.suratKeputusan.isLoading = true;
        const { data } = await apis.berkas.surat_keputusan();
        this.suratKeputusan.data = data.data;
      } finally {
        this.suratKeputusan.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <section
    class="portfolio section-padding bg-gray style-1"
    data-scroll-index="4"
  >
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h6 class="color-main text-uppercase wow fadeInUp">Kegiatan</h6>
            <h2 class="wow fadeInUp">
              Kegiatan Terbaru <span class="fw-normal">Idi Jakarta Pusat</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="content wow fadeIn slow">
        <div class="portfolio-slider">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide v-for="(kegiatan, index) in data" :key="index">
              <div class="portfolio-card">
                <div class="img">
                  <img :src="imgHandler(kegiatan)" alt="" />
                </div>
                <div class="info">
                  <h5>
                    <NuxtLink to="/home/details">
                      {{ kegiatan.article_title }}
                    </NuxtLink>
                  </h5>
                  <small class="d-block color-main text-uppercase">
                    <a href="#" class="me-1" :key="i">{{
                      kegiatan.article_category
                    }}</a>
                  </small>
                  <div class="text">
                    {{ kegiatan.article_title }}
                  </div>
                  <div class="tags">
                    <a href="#" class="me-1" :key="i">{{
                      kegiatan.article_category
                    }}</a>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <img src="/assets/img/projects/prog/shap_r.png" alt="" class="shap_r" />
    <img src="/assets/img/projects/prog/shap_l.png" alt="" class="shap_l" />
  </section>
</template>

<script>
import apis from "../../../src/api";

export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
          el: ".portfolio-slider .swiper-pagination",
        },
        navigation: {
          nextEl: ".portfolio-slider .swiper-button-next",
          prevEl: ".portfolio-slider .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000,
        },
        loop: true,
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
            slidesPerView: 3,
          },
        },
      },
      kegiatan: {
        isLoading: false,
        data: null,
      },
    };
  },

  mounted() {
    this.getKegiatan();
  },

  computed: {
    imgHandler() {
      return (item) => {
        if (item.article_img) {
          if (item.article_img.includes("https")) {
            return item.article_img;
          } else {
            return require("../../../static/assets/img/no-image.png");
          }
        }
        return require("../../../static/assets/img/no-image.png");
      };
    },
    data() {
      return this.kegiatan.data;
    },
  },

  methods: {
    async getKegiatan() {
      try {
        this.kegiatan.isLoading = true;
        const { data } = await apis.home.kegiatan();
        this.kegiatan.data = data.data;
      } finally {
        this.kegiatan.isLoading = false;
      }
    },
  },
};
</script>

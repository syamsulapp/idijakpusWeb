<template>
  <section class="blog-slider pt-50 pb-50 style-1">
    <div class="container">
      <div class="blog-details-slider">
        <swiper class="swiper-container" :options="swiperOptions">
          <swiper-slide v-for="(berita, index) in data" :key="index.id">
            <div class="content-card">
              <div class="img overlay">
                <img :src="imgHandler(berita)" alt="" />
              </div>
              <div class="info">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="cont">
                      <small class="date small mb-25">
                        <a
                          href="#"
                          class="text-uppercase border-end brd-gray pe-3 me-3"
                          >{{ berita.article_category }}</a
                        >
                        <i class="far fa-clock me-2"></i
                        >{{ rtl ? "موعد النشر" : "Posted on" }}
                        <a href="#">{{ berita.article_publish_datetime }}</a>
                      </small>
                      <h5 class="text-uppercase border-end brd-gray pe-3 me-3">
                        <NuxtLink
                          :to="`/home/details/${berita.article_permalink}`"
                        >
                          {{ berita.article_title.substring(0, 18) + "..." }}
                        </NuxtLink>
                      </h5>
                      <!-- <p class="fs-13px mt-10 text-light text-info">
                        {{ berita.article_category }} [...]
                      </p> -->
                    </div>
                  </div>
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
  </section>
</template>

<script>
import slidesRTL from "@/data/Blog/slides-rtl.json";
import apis from "@/src/api";
export default {
  props: ["rtl", "styleType"],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        speed: 1000,
        pagination: {
          el: ".blog-details-slider .swiper-pagination",
          clickable: "true",
        },
        navigation: {
          nextEl: ".blog-details-slider .swiper-button-next",
          prevEl: ".blog-details-slider .swiper-button-prev",
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000,
        },
        loop: true,
      },
      berita: {
        isLoading: false,
        data: null,
      },
    };
  },

  mounted() {
    this.getBerita();
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
      return this.rtl ? slidesRTL : this.berita.data;
    },
  },

  methods: {
    async getBerita() {
      try {
        this.berita.isLoading = true;
        const { data } = await apis.home.berita();
        this.berita.data = data.data;
      } finally {
        this.berita.isLoading = false;
      }
    },
  },
};
</script>

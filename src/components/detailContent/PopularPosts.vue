<template>
  <section class="popular-posts related Posts section-padding pb-100 bg-gray5">
    <div class="container">
      <h5 class="fw-bold text-uppercase mb-50">
        {{ "Postingan Terbaru" }}
      </h5>
      <div class="related-postes-slider position-relative">
        <swiper
          class="swiper-container"
          :dir="rtl ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide v-for="(post, index) in postinganTerkini" :key="index">
            <div class="card border-0 bg-transparent rounded-0 p-0 d-block">
              <NuxtLink
                to="/home/berita"
                class="img radius-7 overflow-hidden img-cover"
              >
                <img
                  :src="imgHandler(post.article_img)"
                  class="card-img-top"
                  alt="..."
                />
              </NuxtLink>
              <div class="card-body px-0">
                <small class="d-block date mt-10 fs-10px fw-bold">
                  <a
                    href="#"
                    :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType}`"
                    >{{ post.article_category }}</a
                  >
                  <i class="bi bi-clock me-1"></i>
                  <a href="#" class="op-8"
                    >{{ rtl ? "تم النشر" : "Posted on" }}
                    {{ post.article_publish_datetime }}</a
                  >
                </small>
                <h5 class="fw-bold mt-10 title">
                  <NuxtLink :to="`/home/details/${post.article_permalink}`">{{
                    post.article_title
                  }}</NuxtLink>
                </h5>
                <p class="small mt-2 op-8">{{ post.article_permalink }}</p>
                <!-- <div
                  class="d-flex small mt-20 align-items-center justify-content-between op-9"
                >
                  <div class="l_side d-flex align-items-center">
                    <span
                      class="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white"
                    >
                      {{ post.userImgLetter }}
                    </span>
                    <a href="#" class="mt-1">
                      {{ rtl ? "بواسطة" : "By" }} {{ post.username }}
                    </a>
                  </div>
                  <div class="r-side mt-1">
                    <i class="bi bi-chat-left-text me-1"></i>
                    <a href="#">{{ post.comments }}</a>
                    <i class="bi bi-eye ms-4 me-1"></i>
                    <a href="#">{{ post.views }}</a>
                  </div>
                </div> -->
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>
</template>

<script>
import apis from "../../api";
export default {
  props: ["rtl", "styleType"],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 80,
        centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
          nextEl: ".related-postes-slider .swiper-button-next",
          prevEl: ".related-postes-slider .swiper-button-prev",
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
            slidesPerView: 1,
          },
          787: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      },
      recentPost: {
        isLoading: false,
        data: null,
      },
    };
  },

  computed: {
    postinganTerkini() {
      return this.recentPost.data;
    },
    imgHandler() {
      return (item) => {
        if (item) {
          if (item.includes("https")) {
            return item;
          } else {
            return require("../../../static/assets/img/no-image.png");
          }
        }
        return require("../../../static/assets/img/no-image.png");
      };
    },
  },
  mounted() {
    this.getPostinganTerbaru();
  },

  methods: {
    async getPostinganTerbaru() {
      try {
        this.recentPost.isLoading = true;
        const { data } = await apis.beritaKegiatan.allBerita();
        this.recentPost.data = data.data;
      } finally {
        this.recentPost.isLoading = false;
      }
    },
  },
};
</script>

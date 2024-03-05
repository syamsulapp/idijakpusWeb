<template>
  <section class="blog section-padding bg-gray style-1" data-scroll-index="6">
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h6 class="color-main text-uppercase wow fadeInUp">Jadwal KRIP</h6>
            <h2 class="wow fadeInUp">
              Terbaru
              <span class="fw-normal">IDI Jakarta Pusat</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="blog_slider">
          <swiper class="swiper-container" :options="swiperOptions">
            <swiper-slide
              style="width: 100%"
              v-for="(krip, index) in data"
              :key="index"
            >
              <div
                class="blog_box"
                @mousemove="showDetails"
                @mouseleave="hideDetails"
              >
                <div class="tags">
                  <a href="#">{{ krip.kripjadwal_status }}</a>
                </div>
                <div class="img">
                  <img :src="imgHandler" alt="" />
                </div>
                <div class="info">
                  <h6>
                    <a href="https://m.idijakpus.or.id" target="_blank">
                      {{ krip.kripjadwal_tempat }}
                    </a>
                  </h6>
                  <div class="auther">
                    <span>
                      <i class="bi bi-tags"></i>
                      <small>
                        <a href="#" class="me-1">{{ "KRIP" }}</a>
                      </small>
                    </span>
                    <span>
                      <i class="bi bi-calendar2"></i>
                      <small
                        ><a href="#">{{ krip.kripjadwal_tanggal }}</a></small
                      >
                    </span>
                  </div>
                  <div class="text">{{ krip.kripjadwal_tempat }} [...]</div>
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
import blogs from "@/data/Digital/blog.json";
import apis from "@/src/api";
export default {
  data() {
    return {
      blogs,
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
      krip: {
        isLoading: false,
        data: null,
      },
    };
  },

  mounted() {
    this.getDataKrip();
  },

  computed: {
    data() {
      return this.krip.data;
    },
    imgHandler() {
      return require("@/static/assets/img/krip.png");
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

    async getDataKrip() {
      try {
        this.krip.isLoading = true;
        const { data } = await apis.home.jadwalKrip();
        if (data.data.length) {
          this.krip.data = [data.data[0]];
        }
      } finally {
        this.krip.isLoading = false;
      }
    },
  },
};
</script>

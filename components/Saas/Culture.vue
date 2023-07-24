<template>
  <section class="culture section-padding style-5">
    <div class="section-head text-center mb-70 style-5">
      <h2 class="mb-20">
        {{ rtl ? "اكتشف" : "Galeri" }}
        <span>{{ rtl ? "ثقافتنا" : "Idi Jakarta Pusat" }}</span>
      </h2>
      <p>
        {{
          rtl
            ? "تعد ثقافة الشركة جزءًا مهمًا من أي عمل تجاري"
            : "Slides Gallery"
        }}
      </p>
    </div>
    <div class="content">
      <div class="culture-slider position-relative pb-80 style-5">
        <swiper
          class="swiper-container"
          :dir="rtl ? 'rtl' : 'ltr'"
          :options="swiperOptions"
        >
          <swiper-slide v-for="(slide, index) in fetchGalery" :key="index">
            <a
              @click="showGallery($event, index)"
              href="#"
              class="culture-card d-block"
            >
              <img :src="slide.gallery_file" alt="" />
              <span @click="showGallery($event, index)" class="overlay"></span>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>

      <!-- <no-ssr>
        detail galery
        <LightGallery
          :dir="rtl ? 'rtl' : 'ltr'"
          :images="gallery"
          :index="index"
          :disable-scroll="true"
          @close="index = null"
        />
      </no-ssr> -->
    </div>
  </section>
</template>

<script>
import apis from "../../src/api";

export default {
  props: ["rtl"],
  data() {
    return {
      index: null,
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: "true",
        },
        navigation: false,
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
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
      },
      galeriGet: {
        isLoading: false,
        data: null,
      },
    };
  },
  computed: {
    // gallery() {
    //   return this.galeriGet.data.map((slide) => ({ url: slide }));
    // },

    fetchGalery() {
      return this.galeriGet.data;
    },
  },
  methods: {
    showGallery(e, i) {
      e.preventDefault();
      this.index = i;
    },
    async getGaleri() {
      try {
        this.galeriGet.isLoading = true;
        const { data } = await apis.galeri.imageGet();
        this.galeriGet.data = data.data;
      } finally {
        this.galeriGet.isLoading = false;
      }
    },
  },

  mounted() {
    this.getGaleri();
  },
};
</script>

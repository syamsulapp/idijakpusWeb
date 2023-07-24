<template>
  <section class="popular-posts pt-50 pb-100 border-bottom brd-gray">
    <div class="container">
      <h5 class="post-sc-title text-center text-uppercase mb-70">
        {{ rtl ? "أخبار شائعة" : "Postingan Terakhir" }}
      </h5>
      <div class="row gx-5">
        <div
          :class="`col-lg-4 ${
            index !== postsData.length - 1 ? 'border-end brd-gray' : ''
          }`"
          v-for="(post, index) in postsData"
          :key="index"
        >
          <div
            class="card border-0 bg-transparent rounded-0 mb-30 mb-lg-0 d-block"
          >
            <div class="img radius-7 overflow-hidden img-cover">
              <img
                :src="imgHandler(post.article_img)"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body px-0">
              <small class="d-block date mt-10 fs-10px fw-bold">
                <a
                  href="#"
                  :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType}`"
                  >{{ rtl ? "أخبار" : post.article_category }}</a
                >
                <i class="bi bi-clock me-1"></i>
                <a href="#" class="op-8"
                  >{{ rtl ? "موعد النشر" : "Posted on" }}
                  {{ post.article_publish_datetime }}</a
                >
              </small>
              <h5 class="fw-bold mt-10 title">
                <NuxtLink :to="rtl ? '/rtl-page-single-post' : '/home/berita'">
                  {{ post.article_title }}
                </NuxtLink>
              </h5>
              <p class="small mt-2 op-8 fs-10px">
                {{ post.article_permalink }} [...]
              </p>
              <div
                class="d-flex small mt-20 align-items-center justify-content-between op-9"
              >
                <div class="l_side d-flex align-items-center">
                  <a href="#" class="mt-1">
                    {{ rtl ? "بواسطة" : "By Admin" }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      beritaKegiatan: {
        isLoading: false,
        data: null,
        limit: 3,
      },
    };
  },
  computed: {
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
    postsData() {
      return this.beritaKegiatan.data;
    },
  },

  mounted() {
    this.BeritaKegiatan();
  },

  methods: {
    async BeritaKegiatan() {
      try {
        this.beritaKegiatan.isLoading = true;
        const { data } = await apis.beritaKegiatan.popularPost({
          limit: this.beritaKegiatan.limit,
        });
        this.beritaKegiatan.data = data.data;
      } finally {
        this.beritaKegiatan.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="col-lg-4">
    <div class="side-blog style-5 ps-lg-5 mt-5 mt-lg-0">
      <!-- hide search -->
      <!-- <form action="contact.php" class="search-form mb-50" method="post">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ "Pencarian" }}
        </h6>
        <div class="form-group position-relative">
          <input
            type="text"
            class="form-control rounded-pill"
            :placeholder="rtl ? 'اكتب وارسل' : 'Type and hit enter'"
          />
          <button class="search-btn border-0 bg-transparent">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form> -->

      <div class="side-recent-post mb-50">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ "Postingan Terkini" }}
        </h6>
        <NuxtLink
          :to="`/home/details/${post.article_permalink}`"
          v-for="(post, index) in sidebarData"
          :key="index"
          :class="`post-card ${
            index !== sidebarData.length - 1
              ? 'pb-3 mb-3 border-bottom brd-gray'
              : ''
          }`"
        >
          <div class="img me-3">
            <img :src="imgHandler(post.article_img)" alt="" />
          </div>
          <div class="inf">
            <h6>{{ post.article_title.substring(0, 29) + "..." }}</h6>
            <p>
              {{ post.article_permalink }}
              [...]
            </p>
          </div>
        </NuxtLink>
      </div>

      <!-- hide kategori dan tags-->
      <!-- <div class="side-categories mb-50">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ "Kategori" }}
        </h6>
        <a
          href="#"
          class="cat-item"
          v-for="(category, index) in countKategori"
          :key="index"
        >
          <span>{{ category.name }}</span>
          <span>{{ category.count }}</span>
        </a>
      </div>

      <div class="side-tags">
        <h6 class="title mb-20 text-uppercase fw-normal">
          {{ rtl ? "الكلمات الاكثر بحثا" : "popular tags" }}
        </h6>
        <div class="content">
          <a
            href="#"
            v-for="(tag, index) in tagIdiJakpus"
            :key="index"
            class="me-1"
            >{{ tag.name }}</a
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import apis from "../../api";

export default {
  props: ["sidebarData", "rtl", "styleType"],
  data() {
    return {
      index: null,
      kategori: {
        isLoading: false,
        data: null,
      },
      tags: {
        isLoading: false,
        data: null,
      },
    };
  },

  mounted() {
    this.getCountKategori();
    this.getTags();
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

    countKategori() {
      return this.kategori.data;
    },
    tagIdiJakpus() {
      return this.tags.data;
    },
  },
  methods: {
    async getCountKategori() {
      try {
        this.kategori.isLoading = true;
        const { data } = await apis.beritaKegiatan.kategori();
        this.kategori.data = data.data;
      } finally {
        this.kategori.isLoading = false;
      }
    },
    async getTags() {
      try {
        this.tags.isLoading = true;
        const { data } = await apis.beritaKegiatan.kategori();
        this.tags.data = data.data;
      } finally {
        this.tags.isLoading = false;
      }
    },
  },
};
</script>

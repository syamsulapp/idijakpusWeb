<template>
  <section class="all-news section-padding blog bg-transparent style-3">
    <div class="container">
      <div
        :class="`row ${
          isWide
            ? 'justify-content-center'
            : leftSidebar
            ? 'gx-5'
            : 'gx-4 gx-lg-5'
        }`"
      >
        <Blogs
          :blogs="blogs"
          :isWide="isWide"
          :styleType="styleType"
          :rtl="rtl"
        />
        <BlogSidebar
          v-if="!isWide && !leftSidebar"
          :sidebarData="postinganTerkini"
          :styleType="styleType"
          :rtl="rtl"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Blogs from "./blog.vue";
import BlogSidebar from "../../components/sidebar";
import apis from "../../api";

export default {
  props: ["rtl", "isWide", "leftSidebar", "styleType"],
  components: {
    Blogs,
    BlogSidebar,
  },
  data() {
    return {
      beritaKegiatan: {
        isLoading: false,
        data: null,
      },
      recentPost: {
        isLoading: false,
        data: null,
        limit: 4,
      },
    };
  },
  computed: {
    allNewsData() {
      return this.rtl ? allNewsDataRTL : allNewsData;
    },
    blogs() {
      return this.beritaKegiatan.data;
    },

    postinganTerkini() {
      return this.recentPost.data;
    },
  },
  mounted() {
    this.BeritaKegiatan();
    this.PostinganTerkini();
  },

  methods: {
    async BeritaKegiatan() {
      try {
        this.beritaKegiatan.isLoading = true;
        const { data } = await apis.beritaKegiatan.allBerita();
        this.beritaKegiatan.data = data.data;
      } finally {
        this.beritaKegiatan.isLoading = false;
      }
    },
    async PostinganTerkini() {
      try {
        this.recentPost.isLoading = true;
        const { data } = await apis.beritaKegiatan.recentPost({
          limit: this.recentPost.limit,
        });
        this.recentPost.data = data.data;
      } finally {
        this.recentPost.isLoading = false;
      }
    },
  },
};
</script>

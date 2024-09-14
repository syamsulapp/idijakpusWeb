<template>
  <section class="all-news section-padding pt-50 blog bg-transparent style-3">
    <div class="container">
      <Details :details="detailPostingan" :styleType="styleType" :rtl="rtl" />
      <div class="row gx-4 gx-lg-5">
        <div :class="isWide ? 'col-lg-12' : 'col-lg-8'">
          <!-- <Metadata :metadata="metadata" :rtl="rtl" /> -->
          <div class="blog-content-info">
            <Content
              :detailContent="detailPostingan"
              :styleType="styleType"
              :rtl="rtl"
            />
            <!-- <Comments
              :comments="data.comments"
              :commentCard="data.commentCard"
              :styleType="styleType"
              :rtl="rtl"
            /> -->
          </div>
        </div>
        <Sidebar
          v-if="!isWide && !leftSidebar"
          :sidebarData="postinganTerkini"
          :leftSidebar="leftSidebar"
          :styleType="styleType"
          :rtl="rtl"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Details from "../detailContent/Details.vue";
// import Metadata from "../detailContent/Metadata.vue";
import Content from "../detailContent/Content.vue";
// import Comments from "../detailContent/Comments.vue";
import Sidebar from "../sidebar";

import news from "../../../data/SinglePost/all-news.json";
import newsRTL from "../../../data/SinglePost/all-news-rtl.json";

import apis from "../../api";

export default {
  props: ["rtl", "styleType", "isWide", "leftSidebar"],
  data() {
    return {
      data: this.rtl ? newsRTL : news,
      recentPost: {
        isLoading: false,
        data: null,
        limit: 4,
      },
      detailDatas: {
        isLoading: false,
        data: {},
      },
    };
  },
  computed: {
    metadata() {
      return {
        imgLetter: this.data.imgLetter,
        user: this.data.user,
        commentsCount: this.data.commentsCount,
        viewsCount: this.data.viewsCount,
      };
    },

    postinganTerkini() {
      return this.recentPost.data;
    },

    detailPostingan() {
      return this.detailDatas.data;
    },
  },
  components: {
    Details,
    // Metadata,
    Content,
    // Comments,
    Sidebar,
  },

  mounted() {
    this.getPostinganTerkini();
    this.getDetailDataContent();
  },

  methods: {
    async getPostinganTerkini() {
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
    async getDetailDataContent() {
      try {
        this.detailDatas.isLoading = true;
        const { data } = await apis.home.detail(this.$route.params.id);
        this.detailDatas.data = data.data;
      } finally {
        this.detailDatas.isLoading = false;
      }
    },
  },
};
</script>

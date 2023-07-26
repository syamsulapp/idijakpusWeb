<template>
  <section class="all-news section-padding pt-50 blog bg-transparent style-3">
    <div class="container">
      <Details
        :details="{ title: data.title, time: data.time, type: data.type }"
        :styleType="styleType"
        :rtl="rtl"
      />
      <div class="row gx-4 gx-lg-5">
        <Sidebar
          v-if="!isWide && leftSidebar"
          :data="data.sidebar"
          :leftSidebar="leftSidebar"
          :styleType="styleType"
          :rtl="rtl"
        />
        <div :class="isWide ? 'col-lg-12' : 'col-lg-8'">
          <Metadata :metadata="metadata" :rtl="rtl" />
          <div class="blog-content-info">
            <Content :styleType="styleType" :rtl="rtl" />
            <Comments
              :comments="data.comments"
              :commentCard="data.commentCard"
              :styleType="styleType"
              :rtl="rtl"
            />
          </div>
        </div>
        <Sidebar
          v-if="!isWide && !leftSidebar"
          :data="data.sidebar"
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
import Metadata from "../detailContent/Metadata.vue";
import Content from "../detailContent/Content.vue";
import Comments from "../detailContent/Comments.vue";
import Sidebar from "../detailContent/Sidebar.vue";

import news from "../../../data/SinglePost/all-news.json";
import newsRTL from "../../../data/SinglePost/all-news-rtl.json";

export default {
  props: ["rtl", "styleType", "isWide", "leftSidebar"],
  data() {
    return {
      data: this.rtl ? newsRTL : news,
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
  },
  components: {
    Details,
    Metadata,
    Content,
    Comments,
    Sidebar,
  },
};
</script>

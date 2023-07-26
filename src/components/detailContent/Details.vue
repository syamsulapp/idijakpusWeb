<template>
  <div class="blog-details-slider mb-100">
    <div class="section-head text-center mb-60 style-5">
      <h2 class="mb-20 color-000">{{ details.article_title }}</h2>
      <small class="d-block date text">
        <a
          href="#"
          :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType} fw-bold`"
          >{{ details.article_category }}</a
        >
        <i class="bi bi-clock me-1"></i>
        <span class="op-8 ms-1"
          >{{ rtl ? "تم النشر" : "Posted on" }}
          {{ details.article_publish_datetime }}</span
        >
      </small>
    </div>
    <div class="content-card">
      <div class="img">
        <img :src="imgHandler(details.article_img)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rtl", "styleType", "details"],
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
  },
};
</script>

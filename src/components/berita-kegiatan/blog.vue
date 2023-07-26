<template>
  <div :class="isWide ? 'col-lg-10' : 'col-lg-8'">
    <div
      :class="`card border-0 bg-transparent rounded-0 ${
        index !== blogs.length - 1
          ? 'border-bottom brd-gray'
          : 'mb-lg-0 pb-lg-0'
      } pb-30 mb-30`"
      v-for="(blog, index) in blogs"
      :key="index"
    >
      <div class="row">
        <div class="col-lg-5">
          <div class="img img-cover">
            <img
              :src="imgHandler(blog.article_img)"
              class="radius-7"
              alt="..."
            />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="card-body p-0">
            <small class="d-block date text">
              <a
                href="#"
                :class="`text-uppercase border-end brd-gray pe-3 me-3 color-blue${styleType} fw-bold`"
                >{{ blog.article_category }}</a
              >
              <i class="bi bi-clock me-1"></i>
              <a href="#" class="op-8">{{ blog.article_publish_datetime }}</a>
            </small>
            <NuxtLink
              :to="`/home/details/${blog.article_permalink}`"
              class="card-title mb-10"
            >
              {{ blog.article_title }}
            </NuxtLink>
            <p class="fs-13px color-666">{{ blog.article_permalink }} [...]</p>
            <div
              class="auther-comments d-flex small align-items-center justify-content-between op-9"
            >
              <div class="l_side d-flex align-items-center">
                <a href="#">
                  <small class="text-muted">{{
                    rtl ? "بواسطة" : "By Admin"
                  }}</small>
                  {{ blog.username }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="`pagination style-5 color-${styleType} justify-content-center mt-60`"
    >
      <a href="#" class="active">
        <span>1</span>
      </a>
      <a href="#">
        <span>2</span>
      </a>
      <a href="#">
        <span>3</span>
      </a>
      <a href="#">
        <span>4</span>
      </a>
      <a href="#">
        <span>...</span>
      </a>
      <a href="#">
        <span>20</span>
      </a>
      <a href="#">
        <span class="text"
          >{{ rtl ? "التالي" : "next" }} <i class="fas fa-chevron-right"></i>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rtl", "styleType", "isWide", "blogs"],

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

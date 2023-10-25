<template>
  <div class="challenge section-padding style-5 overflow-hidden">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-4">
          <div :class="`section-head style-${styleType}`">
            <h2>
              {{ rtl ? "" : "Buku" }} <br />
              <span>{{ rtl ? "التحدى" : "Panduan" }}</span>
            </h2>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="inf">
            <div
              class="text color-666 mb-20"
              v-for="(item, index) in data"
              :key="index.id"
            >
              {{
                rtl
                  ? 'قم بإنشاء موقع ويب غير تقليدي ولكنه سهل الاستخدام - مبتكر ، بتصميم نظيف وبسيط يتواصل ويعرض محتوى الوسائط المتعددة. الموقع الذي ينشر الرسالة: "إنها قصص حبك.”'
                  : item.article_title
              }}
            </div>
            <ul class="color-000">
              <li
                class="d-flex mb-10"
                v-for="(item, index) in data"
                :key="index.id"
              >
                <div v-html="item.article_body"></div>
              </li>
            </ul>
            <p>{{ "saat ini data tidak tersedia" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apis from "../../../api";

export default {
  props: ["rtl", "styleType"],
  data() {
    return {
      bukuPanduan: {
        isLoading: false,
        data: null,
      },
    };
  },

  mounted() {
    this.getBukuPanduan();
  },

  computed: {
    data() {
      return this.bukuPanduan.data;
    },
  },

  methods: {
    async getBukuPanduan() {
      try {
        this.bukuPanduan.isLoading = true;
        // const { data } = await apis.layananIdi.anggota();
        this.bukuPanduan.data = data.data;
      } finally {
        this.bukuPanduan.isLoading = false;
      }
    },
  },
};
</script>

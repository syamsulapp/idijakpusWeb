<template>
  <div class="challenge section-padding style-5 overflow-hidden">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-4">
          <div :class="`section-head style-${styleType}`">
            <h2>
              {{ rtl ? "" : "Faq" }} <br />
              <span>{{ rtl ? "التحدى" : "Data" }}</span>
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
            <div class="color-000">
              <h4>
                <b>Buku Panduan Penggunaan Aplikasi Simfoni</b>:
                <a
                  href="https://drive.google.com/file/d/1OFevQWgsULD6-Sx9df976xykpWc90nhW/view?usp=sharing"
                  target="_blank"
                  >Lihat File</a
                >
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apis from "../../api";

export default {
  props: ["rtl", "styleType"],
  data() {
    return {
      faq: {
        isLoading: false,
        data: null,
      },
    };
  },

  mounted() {
    this.getFaq();
  },

  computed: {
    data() {
      return this.faq.data;
    },
  },

  methods: {
    async getFaq() {
      try {
        this.faq.isLoading = true;
        //   const { data } = await apis.layananIdi.anggota();
        this.faq.data = data.data;
      } finally {
        this.faq.isLoading = false;
      }
    },
  },
};
</script>

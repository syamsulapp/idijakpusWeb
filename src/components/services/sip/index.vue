<template>
  <div class="challenge section-padding style-5 overflow-hidden">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-4">
          <div :class="`section-head style-${styleType}`">
            <h2>
              {{ rtl ? "" : "Permohonan" }} <br />
              <span>{{ rtl ? "التحدى" : "Surta Izin Praktik Dokter" }}</span>
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
                <i class="bi bi-dot fs-6 me-2"></i> {{ item.article_body }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="imgs mt-60 mb-100">
        <div class="row">
          <div class="col-lg-4">
            <div class="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
              <img src="/assets/img/icon-idcard.png" alt="" />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="img img-cover rounded-3 overflow-hidden">
              <img src="/assets/img/idi-logo.svg" alt="" />
            </div>
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
      anggota: {
        isLoading: false,
        data: null,
      },
    };
  },

  mounted() {
    this.getLayananAnggota();
  },

  computed: {
    data() {
      return this.anggota.data;
    },
  },

  methods: {
    async getLayananAnggota() {
      try {
        this.anggota.isLoading = true;
        const { data } = await apis.layananIdi.sip();
        this.anggota.data = data.data;
      } finally {
        this.anggota.isLoading = false;
      }
    },
  },
};
</script>

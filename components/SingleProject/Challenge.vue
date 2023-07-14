<template>
  <div class="challenge section-padding style-5 overflow-hidden">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-4">
          <div :class="`section-head style-${styleType}`">
            <h2>
              {{ rtl ? "" : "Our" }} <br />
              <span>{{ rtl ? "التحدى" : "Challenge" }}</span>
            </h2>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="inf">
            <div class="text color-666 mb-20">
              {{
                rtl
                  ? 'قم بإنشاء موقع ويب غير تقليدي ولكنه سهل الاستخدام - مبتكر ، بتصميم نظيف وبسيط يتواصل ويعرض محتوى الوسائط المتعددة. الموقع الذي ينشر الرسالة: "إنها قصص حبك.”'
                  : "Create an unconventional yet user-friendly website – innovative, with a clean & simple design that communicates and showcases multi-media content. Site that spreads the message: ”It’s stories your love.”"
              }}
            </div>
            <ul class="color-000">
              <li
                class="d-flex mb-10"
                v-for="(item, index) in data.challenge"
                :key="index"
              >
                <i class="bi bi-dot fs-6 me-2"></i> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="imgs mt-60 mb-100">
        <div class="row">
          <div class="col-lg-6">
            <div class="img img-cover rounded-3 overflow-hidden mb-30 mb-lg-0">
              <img src="/assets/img/single_project/ch_1.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="img img-cover rounded-3 overflow-hidden">
              <img src="/assets/img/single_project/ch_2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import challengeData from "../../data/SingleProject/challenge.json";
import challengeDataRTL from "../../data/SingleProject/challenge-rtl.json";

export default {
  props: ["rtl", "styleType"],
  data() {
    return {
      data: this.rtl ? challengeDataRTL : challengeData,
    };
  },
};
</script>

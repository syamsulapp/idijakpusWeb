<template>
  <section class="services section-padding style-1" data-scroll-index="2">
    <div class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <div class="section-head mb-60">
            <h6 class="color-main text-uppercase wow fadeInUp">Pelayanan</h6>
            <h2 class="wow fadeInUp">
              IDI <span class="fw-normal">Jakarta Pusat</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div
            class="col-lg-4"
            v-for="(service, index) in services"
            :key="index"
          >
            <div
              class="service-box mb-4 wow fadeInUp"
              :data-wow-delay="index * 0.2 + 's'"
            >
              <h5>
                <a href="https://m.idijakpus.or.id/login" target="_blank">{{
                  service.title
                }}</a>
                <span class="num">{{ service.number }}</span>
              </h5>
              <div class="icon">
                <img :src="service.icon" alt="" />
              </div>
              <div class="info">
                <div class="text">
                  {{ service.text }}
                </div>
                <div class="tags">
                  <a
                    href="#"
                    class="me-1"
                    v-for="(tag, i) in service.tags"
                    :key="i"
                    >{{ tag }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/services/ser_shap_l.png" alt="" class="ser_shap_l" />
    <img src="/assets/img/services/ser_shap_r.png" alt="" class="ser_shap_r" />
  </section>
</template>

<script>
import services from "@/data/Digital/services.json";

export default {
  data() {
    return {
      services,
    };
  },
};
</script>

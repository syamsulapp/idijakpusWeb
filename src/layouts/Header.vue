<template>
  <header class="section-padding style-1" data-scroll-index="0">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-6">
            <div class="info">
              <div class="section-head mb-60">
                <h6 class="color-main text-uppercase">
                  IDI Cabang Jakarta Pusat
                </h6>
                <h2>
                  Pelayanan Terintegrasi Dalam
                  <span class="fw-normal">Satu Aplikasi</span>
                </h2>
              </div>
              <div class="text">
                Semua Layanan Terintegrasi Kedalam Satu Aplikasi
              </div>
              <div class="bttns mt-5">
                <a
                  href="https://m.idijakpus.or.id"
                  class="btn btn-dark"
                  target="_blank"
                >
                  <span>Open APP</span>
                </a>
                <a
                  href="https://youtu.be/nA1w1KpI7lM"
                  class="vid-btn"
                  @click="openVideo"
                >
                  <i class="bi bi-play wow heartBeat infinite slow"></i>
                  <span
                    >Jakpus Video<br />
                    Simfoni</span
                  >
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="img">
              <img src="@/static/assets/img/simfoniLogo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/static/assets/img/header/head_shape_r.png"
      alt=""
      class="head-shape-r wow"
    />
    <img
      src="@/static/assets/img/header/head_shape_l.png"
      alt=""
      class="head-shape-l wow"
    />
    <ModalVideo
      channel="youtube"
      videoId="nA1w1KpI7lM"
      :isOpen.sync="videoIsOpen"
    />
  </header>
</template>

<script>
import ModalVideo from "@/src/source/Video.vue";

export default {
  components: {
    ModalVideo,
  },
  data() {
    return {
      videoIsOpen: false,
    };
  },
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen;
    },
  },
};
</script>

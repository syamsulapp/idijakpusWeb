<template>
  <footer class="style-1">
    <div class="container">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <div class="foot_info">
              <a href="#" class="logo mb-3">
                <img src="/assets/img/idi-logo.svg" alt="" />
              </a>
              <div class="text mb-4">Sekretariat IDI Jakarta Pusat</div>
              <ul class="mb-4">
                <li class="d-flex">
                  <i class="bi bi-house me-3"></i>
                  <a href="">
                    <span>{{ footerInfo.address }}</span>
                  </a>
                </li>
                <li class="d-flex">
                  <i class="bi bi-map me-3"></i>
                  <a href="/home/contact">
                    <span>{{ "Lokasi Kami" }}</span>
                  </a>
                </li>
                <!-- <li class="d-flex">
                  <i class="bi bi-phone me-3"></i>
                  <a href="#">
                    <span>{{ footerInfo.phone }}</span>
                  </a>
                </li> -->
              </ul>
              <!-- <div class="social_icons">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </div> -->
            </div>
          </div>
          <div class="col-lg-2">
            <div class="links">
              <div class="cont">
                <h6 class="link_title">Hubungi Kami</h6>
                <ul class="mb-4">
                  <li class="d-flex">
                    <i class="bi bi-phone me-3"></i>
                    <span
                      ><a href="tel:+62 811-9110-189">{{
                        "+62 811-9110-189"
                      }}</a></span
                    >
                  </li>
                  <li class="d-flex">
                    <i class="bi bi-mailbox2 me-3"></i>
                    <a href="mailto:info@idijakpus.or.id">
                      <span>{{ "info@idijakpus.or.id" }}</span>
                    </a>
                  </li>
                  <br />
                  <li class="d-flex">
                    <span>{{
                      "jika mengalami kendala dalam penggunaan aplikasi simfoni,silahkan melapor melalui"
                    }}</span>
                  </li>
                  <li class="d-flex">
                    <i class="bi bi-mailbox2 me-3"></i>
                    <a href="mailto:simfonicare@idijakpus.or.id">
                      <span>{{ "simfonicare@idijakpus.or.id" }}</span>
                    </a>
                  </li>
                  <!-- <li class="d-flex">
                  <i class="bi bi-phone me-3"></i>
                  <a href="#">
                    <span>{{ footerInfo.phone }}</span>
                  </a>
                </li> -->
                </ul>
              </div>
            </div>
          </div>

          <!-- 
            MKKI
Kolegium Dokter Indonesia
Akreditasi P2KB
          -->
          <!-- hide information contact -->
          <div class="col-lg-2">
            <div class="links">
              <div class="cont">
                <h6 class="link_title">Pendidikan</h6>
                <ul>
                  <li
                    v-for="(item, index) in footerInfo.pendidikan"
                    :key="index"
                  >
                    <a :href="item.url" target="_blank">{{ item.nama }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="foot_subscribe">
              <h6 class="link_title">SOSIAL MEDIA</h6>
              <div
                v-for="(item, index) in footerInfo.sosialmedia"
                class="social_icons"
                :index="index"
              >
                <a :href="item.url">
                  <i :class="item.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="foot">
            <p>{{ footerInfo.footerCopyright }}</p>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/footer/foot_l.png" alt="" class="foot_l" />
    <img src="/assets/img/footer/foot_r.png" alt="" class="foot_r" />
  </footer>
</template>

<script>
import footerInfo from "../../data/Digital/footer.json";

export default {
  data() {
    return {
      footerInfo,
    };
  },
};
</script>

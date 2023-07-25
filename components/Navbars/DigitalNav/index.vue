<template>
  <nav class="navbar navbar-expand-lg navbar-light style-1" ref="navbarRef">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/assets/img/idi-logo.svg" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/home" class="nav-link"> Beranda </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/berita-kegiatan" class="nav-link">
              berita-kegiatan
            </NuxtLink>
          </li>
          <li
            class="nav-item dropdown"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pelayanan
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <NuxtLink to="/services/sip" class="dropdown-item"
                  >Rekomendasi SIP</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/services/anggotabaru" class="dropdown-item"
                  >Registrasi Anggota Baru/Ulang</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/services/ppds" class="dropdown-item"
                  >Pengajuan Rekomendasi Masuk PPDS
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/mutasi" class="dropdown-item"
                  >Permohonan Mutasi Keluar IDI cab.Jakarta Pusat
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/galeri" class="nav-link"> Galeri </NuxtLink>
          </li>
          <li
            class="nav-item dropdown"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Berkas
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <NuxtLink to="/berkas/surat-keputusan" class="dropdown-item"
                  >Surat Keputusan</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/berkas/surat-edaran" class="dropdown-item"
                  >Surat Edaran</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/berkas/buku-panduan" class="dropdown-item"
                  >Buku Dan Panduan
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/berkas/peraturan-bidang-kesehatan"
                  class="dropdown-item"
                  >Peraturan Bidang Kesehatan
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/berkas/panduan-penggunaan-aplikasi"
                  class="dropdown-item"
                  >Panduan Penggunaan Aplikasi Simfoni
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li
            class="nav-item dropdown"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tentang
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <NuxtLink to="/about/profile" class="dropdown-item"
                  >Profile Idi Cabang Jakarta Pusat</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about/sejarah" class="dropdown-item"
                  >Sejarah Organisasi Kedokteran Indonesia</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/about/susunan-pengurus" class="dropdown-item"
                  >Susunan Pengurus
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li
            class="nav-item dropdown"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <NuxtLink to="/faq" class="dropdown-item">FAQ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="dropdown-item"
                  >Hubungi Kami</NuxtLink
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="nav-side">
          <div class="hotline pe-4">
            <div class="icon me-3">
              <i class="bi bi-telephone"></i>
            </div>
            <div class="cont">
              <small class="text-muted m-0">Contact IDI Jakpus</small>
              <h6>(+62) 811-9110-189</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import navbarScrollEffect from "../../../common/navbarScrollEffect";

export default {
  methods: {
    handleMouseMove(event) {
      const dropDownToggler = event.target.classList.contains("dropdown-toggle")
        ? event.target
        : event.target.querySelector(".dropdown-toggle");
      const dropDownMenu = dropDownToggler?.nextElementSibling;

      dropDownToggler?.classList?.add("show");
      dropDownMenu?.classList?.add("show");
    },
    handleMouseLeave(event) {
      const dropdown = event.target.classList.contains("dropdown")
        ? event.target
        : event.target.closest(".dropdown");
      const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
      const dropDownMenu = dropdown.querySelector(".dropdown-menu");

      dropDownToggler?.classList?.remove("show");
      dropDownMenu?.classList?.remove("show");
    },
  },
  mounted() {
    navbarScrollEffect(this.$refs.navbarRef);
  },
};
</script>

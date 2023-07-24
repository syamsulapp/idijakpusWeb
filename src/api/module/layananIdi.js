import resource from "../handler";

const endpoint = {
  layanan: {
    sip: "/web/layanan/sip",
    anggota: "/web/layanan/anggota_baru",
    mutasi: "/web/layanan/mutasi_keluar",
    ppds: "/web/layanan/masuk_ppds",
  },
};
export default {
  sip() {
    return resource.get(`${endpoint.layanan.sip}`);
  },

  anggota() {
    return resource.get(`${endpoint.layanan.anggota}`);
  },

  mutasi() {
    return resource.get(`${endpoint.layanan.mutasi}`);
  },

  ppds() {
    return resource.get(`${endpoint.layanan.ppds}`);
  },
};

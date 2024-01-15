import resource from "../handler";

const endpoint = {
  berkas: {
    surat_keputusan: "/web/berkas/surat-keputusan",
    surat_edaran: "/web/berkas/surat-edaran",
    buku_panduan: "/web/berkas/buku-panduan",
    peraturan_bidang_kesehatan: "/web/berkas/peraturan-bidang-kesehatan",
  },
};
export default {
  surat_keputusan() {
    return resource.get(`${endpoint.berkas.surat_keputusan}`);
  },

  surat_edaran() {
    return resource.get(`${endpoint.berkas.surat_edaran}`);
  },

  buku_panduan() {
    return resource.get(`${endpoint.berkas.buku_panduan}`);
  },

  peraturan_bidang_kesehatan() {
    return resource.get(`${endpoint.berkas.peraturan_bidang_kesehatan}`);
  },
};

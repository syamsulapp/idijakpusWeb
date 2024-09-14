import resource from "@/src/api/handler";

const endpoint = {
  beritaKegiatan: {
    index: "/web/berita-kegiatan",
    detail: "/detail",
    kategori: "/web/kategori",
  },
};
export default {
  popularPost(data) {
    return resource.get(`${endpoint.beritaKegiatan.index}`, { params: data });
  },

  allBerita() {
    return resource.get(`${endpoint.beritaKegiatan.index}`);
  },

  recentPost(data) {
    return resource.get(`${endpoint.beritaKegiatan.index}`, { params: data });
  },

  kategori() {
    return resource.get(`${endpoint.beritaKegiatan.kategori}`);
  },
};

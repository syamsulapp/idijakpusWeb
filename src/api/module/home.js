import resource from "../handler";

const endpoint = {
  berita: {
    index: "/web/berita",
    detail: "detail",
  },
  kegiatan: {
    index: "/web/kegiatan",
    detail: "detail",
  },
  jadwalKrip: {
    index: "/web/jadwal_krip",
  },
  webinar: {
    index: "/web/webinar",
  },
};
export default {
  berita() {
    return resource.get(`${endpoint.berita.index}`);
  },

  detail(permalink) {
    console.log(
      "Detail-data:",
      resource.get(
        `${endpoint.berita.index}/${permalink}/${endpoint.berita.detail}`
      )
    );
    return resource.get(
      `${endpoint.berita.index}/${permalink}/${endpoint.berita.detail}`
    );
  },

  kegiatan() {
    return resource.get(`${endpoint.kegiatan.index}`);
  },

  jadwalKrip() {
    return resource.get(`${endpoint.jadwalKrip.index}`);
  },

  webinar() {
    return resource.get(`${endpoint.webinar.index}`);
  },
};

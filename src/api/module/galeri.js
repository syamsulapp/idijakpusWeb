import resource from "../handler";

const endpoint = {
  image: {
    index: "/web/galeri/image",
  },
  galeri: {
    index: "/web/galeri/video",
  },
};
export default {
  galeriGet() {
    return resource.get(`${endpoint.galeri.index}`);
  },
  imageGet() {
    return resource.get(`${endpoint.image.index}`);
  },
};

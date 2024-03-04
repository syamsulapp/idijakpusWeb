import resource from "@/src/api/handler";

const endpoint = {
  profile: {
    index: "/web/about/profile",
  },
  sejarah: {
    index: "/web/about/sejarah",
  },
  pengurus: {
    index: "/web/about/pengurus",
  },
};
export default {
  profile() {
    return resource.get(`${endpoint.profile.index}`);
  },

  sejarah() {
    return resource.get(`${endpoint.sejarah.index}`);
  },

  pengurus() {
    return resource.get(`${endpoint.pengurus.index}`);
  },
};
